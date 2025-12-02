import { NextResponse } from 'next/server';

export async function GET() {
  const databaseUrl = process.env.DATABASE_URL || 'NOT SET';
  const masked = databaseUrl.replace(/:([^:@]+)@/, ':****@');
  
  return NextResponse.json({
    databaseUrl: masked,
    length: databaseUrl.length,
    containsPooler: databaseUrl.includes('pooler'),
    containsPostgresUser: databaseUrl.includes('postgres.dwyricbmkwtrpdzsmefr'),
    first50: databaseUrl.substring(0, 50),
    last50: databaseUrl.substring(Math.max(0, databaseUrl.length - 50)),
  });
}

