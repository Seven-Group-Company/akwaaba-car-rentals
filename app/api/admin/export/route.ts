import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { getAdminFromRequest } from '@/lib/auth-helpers';

export async function GET(request: NextRequest) {
  try {
    const admin = getAdminFromRequest(request);
    
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Convert to CSV format
    const headers = [
      'ID',
      'Full Name',
      'Phone Number',
      'Email',
      'Car Type',
      'Pick-up Date',
      'Drop-off Date',
      'Location',
      'Additional Notes',
      'Status',
      'Created At',
    ];

    const rows = bookings.map((booking) => [
      booking.id,
      booking.fullName,
      booking.phoneNumber,
      booking.email,
      booking.carType,
      new Date(booking.pickUpDate).toLocaleString(),
      new Date(booking.dropOffDate).toLocaleString(),
      booking.location,
      booking.additionalNotes || '',
      booking.status,
      new Date(booking.createdAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')),
    ].join('\n');

    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="bookings-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error('Error exporting bookings:', error);
    return NextResponse.json(
      { error: 'Failed to export bookings' },
      { status: 500 }
    );
  }
}

