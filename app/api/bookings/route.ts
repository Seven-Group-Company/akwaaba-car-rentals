import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { sendBookingNotificationEmail } from '@/lib/email';
import { getAdminFromRequest } from '@/lib/auth-helpers';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      phoneNumber,
      email,
      carType,
      pickUpDate,
      dropOffDate,
      location,
      additionalNotes,
    } = body;

    // Validate required fields
    if (!fullName || !phoneNumber || !email || !carType || !pickUpDate || !dropOffDate || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert booking into database
    const booking = await prisma.booking.create({
      data: {
        fullName,
        phoneNumber,
        email,
        carType,
        pickUpDate: new Date(pickUpDate),
        dropOffDate: new Date(dropOffDate),
        location,
        additionalNotes: additionalNotes || null,
        status: 'pending',
      },
      select: {
        id: true,
        createdAt: true,
      },
    });

    // Send email notification to admin
    try {
      await sendBookingNotificationEmail({
        fullName,
        phoneNumber,
        email,
        carType,
        pickUpDate: new Date(pickUpDate).toLocaleString(),
        dropOffDate: new Date(dropOffDate).toLocaleString(),
        location,
        additionalNotes,
        bookingId: booking.id,
      });
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      {
        success: true,
        bookingId: booking.id,
        message: 'Booking request submitted successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // This endpoint should be protected and only accessible by admins
    const admin = getAdminFromRequest(request);
    
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const status = request.nextUrl.searchParams.get('status');
    
    const where = status ? { status: status as 'pending' | 'confirmed' | 'completed' | 'cancelled' } : {};
    
    const bookings = await prisma.booking.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

