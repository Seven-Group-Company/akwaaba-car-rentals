#!/usr/bin/env node

/**
 * Script to check database connection
 * Usage: node scripts/check-db.js
 */

require('dotenv').config({ path: '.env.local' });
require('dotenv').config();

const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

async function checkDatabase() {
  console.log('🔍 Checking database connection...\n');

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.error('❌ DATABASE_URL is not set in your .env or .env.local file');
    process.exit(1);
  }

  // Mask password in URL for display
  const maskedUrl = databaseUrl.replace(/:([^:@]+)@/, ':****@');
  console.log('📋 DATABASE_URL:', maskedUrl);
  console.log('');

  try {
    const pool = new Pool({
      connectionString: databaseUrl,
    });

    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });

    console.log('🔄 Attempting to connect...');
    await prisma.$connect();

    console.log('✅ Database connection successful!\n');

    // Test query
    const userCount = await prisma.user.count();
    console.log(`📊 Users in database: ${userCount}`);

    const adminCount = await prisma.admin.count();
    console.log(`📊 Admins in database: ${adminCount}\n`);

    await prisma.$disconnect();
    console.log('✅ All checks passed!');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Database connection failed!\n');
    
    if (error.code === 'P1000') {
      console.error('🔴 Error: Authentication failed');
      console.error('   The database password in your DATABASE_URL is incorrect.\n');
      console.error('📝 How to fix:');
      console.error('   1. Go to your database provider (Supabase, Railway, etc.)');
      console.error('   2. Get the correct connection string');
      console.error('   3. Update DATABASE_URL in your .env or .env.local file');
      console.error('   4. Restart your dev server\n');
    } else if (error.code === 'P1001') {
      console.error('🔴 Error: Cannot reach database server');
      console.error('   Check if your database is running and accessible.\n');
    } else {
      console.error('🔴 Error:', error.message);
      if (error.code) {
        console.error('   Code:', error.code);
      }
    }

    process.exit(1);
  }
}

checkDatabase();

