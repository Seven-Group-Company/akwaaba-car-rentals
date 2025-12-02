import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

export async function GET() {
  try {
    const databaseUrl = process.env.DATABASE_URL;
    
    if (!databaseUrl) {
      return NextResponse.json({ error: 'DATABASE_URL not set' }, { status: 500 });
    }

    // Parse the connection string to see what Pool is actually using
    const urlMatch = databaseUrl.match(/^postgresql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)$/);
    const parsed = urlMatch ? {
      user: urlMatch[1],
      password: urlMatch[2].substring(0, 10) + '...',
      host: urlMatch[3],
      port: urlMatch[4],
      database: urlMatch[5],
    } : null;

    // Test 1: Direct Pool connection with connectionString
    const pool1 = new Pool({
      connectionString: databaseUrl,
    });

    try {
      const result = await pool1.query('SELECT 1 as test');
      await pool1.end();
      return NextResponse.json({
        success: true,
        message: 'Direct Pool connection works!',
        testResult: result.rows[0],
        parsed,
      });
    } catch (poolError: any) {
      await pool1.end();
      
      // Test 2: Try with explicit connection parameters
      const pool2 = new Pool({
        host: parsed?.host,
        port: parsed ? parseInt(parsed.port) : 5432,
        database: parsed?.database,
        user: parsed?.user,
        password: urlMatch ? urlMatch[2] : undefined,
      });
      
      try {
        const result2 = await pool2.query('SELECT 1 as test');
        await pool2.end();
        return NextResponse.json({
          success: true,
          message: 'Pool connection with explicit params works!',
          testResult: result2.rows[0],
          parsed,
        });
      } catch (poolError2: any) {
        await pool2.end();
        return NextResponse.json({
          success: false,
          error: 'Both connection methods failed',
          connectionStringError: poolError.message,
          explicitParamsError: poolError2.message,
          parsed,
        }, { status: 500 });
      }
    }
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message || 'Unknown error',
    }, { status: 500 });
  }
}

