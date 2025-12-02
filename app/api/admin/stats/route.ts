import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { getAdminFromRequest } from '@/lib/auth-helpers';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const admin = getAdminFromRequest(request);
    
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Get total bookings
    const totalBookings = await prisma.booking.count();

    // Get bookings by status
    const statusData = await prisma.booking.groupBy({
      by: ['status'],
      _count: {
        status: true,
      },
    });

    const statusCounts: Record<string, number> = {
      pending: 0,
      confirmed: 0,
      completed: 0,
      cancelled: 0,
    };

    statusData.forEach((item) => {
      statusCounts[item.status] = item._count.status;
    });

    // Get recent bookings (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const recentBookings = await prisma.booking.count({
      where: {
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
    });

    return NextResponse.json({
      success: true,
      stats: {
        totalBookings,
        pending: statusCounts.pending,
        confirmed: statusCounts.confirmed,
        completed: statusCounts.completed,
        cancelled: statusCounts.cancelled,
        recentBookings,
      },
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}

