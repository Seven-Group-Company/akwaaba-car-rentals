import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  pool: Pool | undefined;
  adapter: PrismaPg | undefined;
  databaseUrl: string | undefined;
};

// Prisma 7 requires an adapter or accelerateUrl
// We'll use the PostgreSQL adapter with DATABASE_URL from environment
const getDatabaseUrl = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  return process.env.DATABASE_URL;
};

// Create a new Prisma client instance
const createPrismaClient = () => {
  const databaseUrl = getDatabaseUrl();
  
  // Log the DATABASE_URL being used (mask password for security)
  const maskedUrl = databaseUrl.replace(/:([^:@]+)@/, ':****@');
  console.log('[DB] Creating Prisma client with DATABASE_URL:', maskedUrl);
  console.log('[DB] Full URL length:', databaseUrl.length);
  console.log('[DB] URL contains pooler:', databaseUrl.includes('pooler'));
  console.log('[DB] URL contains postgres.dwyricbmkwtrpdzsmefr:', databaseUrl.includes('postgres.dwyricbmkwtrpdzsmefr'));
  
  // If we have a cached client but the DATABASE_URL changed, disconnect and recreate
  if (globalForPrisma.prisma && globalForPrisma.databaseUrl !== databaseUrl) {
    console.log('[DB] DATABASE_URL changed, recreating Prisma client...');
    globalForPrisma.prisma.$disconnect().catch(() => {});
    if (globalForPrisma.pool) {
      globalForPrisma.pool.end().catch(() => {});
    }
    globalForPrisma.prisma = undefined;
    globalForPrisma.pool = undefined;
    globalForPrisma.adapter = undefined;
  }

  // Always create a new pool and adapter to ensure fresh connection
  if (globalForPrisma.pool) {
    console.log('[DB] Closing existing pool...');
    globalForPrisma.pool.end().catch(() => {});
  }
  
  console.log('[DB] Creating new pool and adapter...');
  
  // Use the DATABASE_URL connection string directly (same as the working script)
  // This is the simplest and most reliable approach
  globalForPrisma.pool = new Pool({
    connectionString: databaseUrl,
  });
  globalForPrisma.adapter = new PrismaPg(globalForPrisma.pool);
  globalForPrisma.databaseUrl = databaseUrl;

  const prisma = new PrismaClient({
    adapter: globalForPrisma.adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

  console.log('[DB] Prisma client created successfully');
  return prisma;
};

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;

