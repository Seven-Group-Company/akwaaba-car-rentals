const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

async function seed() {
  try {
    console.log('Seeding database...');

    // Create default admin user
    const defaultEmail = process.env.ADMIN_EMAIL || 'admin@akwaabacarrental.com';
    const defaultPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const defaultName = process.env.ADMIN_NAME || 'Admin User';

    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    // Check if admin already exists
    const existingAdmin = await pool.query('SELECT id FROM admins WHERE email = $1', [defaultEmail]);

    if (existingAdmin.rows.length === 0) {
      await pool.query(
        'INSERT INTO admins (email, password_hash, name) VALUES ($1, $2, $3)',
        [defaultEmail, hashedPassword, defaultName]
      );
      console.log(`✅ Created default admin user: ${defaultEmail}`);
      console.log(`   Password: ${defaultPassword}`);
      console.log('   ⚠️  Please change the default password after first login!');
    } else {
      console.log(`ℹ️  Admin user already exists: ${defaultEmail}`);
    }

    // Seed fleet data (optional)
    const fleetCount = await pool.query('SELECT COUNT(*) as count FROM fleet');
    if (parseInt(fleetCount.rows[0].count) === 0) {
      const fleetItems = [
        {
          name: 'Economy Sedan',
          description: 'Perfect for city driving and short trips. Fuel-efficient and comfortable.',
          price_per_day: 50,
        },
        {
          name: 'SUV',
          description: 'Spacious and powerful, ideal for family trips and off-road adventures.',
          price_per_day: 80,
        },
        {
          name: 'Luxury Sedan',
          description: 'Premium comfort and style for business or special occasions.',
          price_per_day: 120,
        },
        {
          name: 'Compact Car',
          description: 'Small, agile, and perfect for navigating busy city streets.',
          price_per_day: 40,
        },
        {
          name: 'Van',
          description: 'Large capacity vehicle perfect for group travel or moving.',
          price_per_day: 100,
        },
        {
          name: 'Pickup Truck',
          description: 'Robust and versatile for work or recreational activities.',
          price_per_day: 90,
        },
      ];

      for (const item of fleetItems) {
        await pool.query(
          'INSERT INTO fleet (name, description, price_per_day, available) VALUES ($1, $2, $3, $4)',
          [item.name, item.description, item.price_per_day, true]
        );
      }

      console.log('✅ Seeded fleet data');
    } else {
      console.log('ℹ️  Fleet data already exists');
    }

    console.log('✅ Database seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();

