import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    // Test basic connection
    await prisma.$connect();
    
    // Test if User table exists by trying to count
    const userCount = await prisma.user.count();
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      userTableExists: true,
      userCount,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error?.message || 'Unknown error',
      code: error?.code,
      details: error?.meta || null,
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

