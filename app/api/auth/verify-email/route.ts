import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json();

    console.log('Verify email request received for:', email, 'OTP:', otp);

    if (!email || !otp) {
      console.log('Missing email or OTP');
      return NextResponse.json(
        { error: 'Email and verification code are required.' },
        { status: 400 }
      );
    }

    console.log('Looking up user...');
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.log('User not found:', email);
      return NextResponse.json(
        { error: 'No account found with this email address.' },
        { status: 400 }
      );
    }

    console.log('User found:', {
      email: user.email,
      hasOtp: !!user.verificationOtp,
      isVerified: user.isVerified,
      otpExpires: user.verificationExpiresAt,
    });

    if (!user.verificationOtp || !user.verificationExpiresAt) {
      console.log('User has no OTP or expiry date');
      return NextResponse.json(
        { error: 'No verification code found. Please request a new code.' },
        { status: 400 }
      );
    }

    if (user.isVerified) {
      console.log('User already verified');
      return NextResponse.json(
        { error: 'This email is already verified.' },
        { status: 400 }
      );
    }

    const now = new Date();
    console.log('Checking OTP:', {
      provided: otp,
      stored: user.verificationOtp,
      matches: user.verificationOtp === otp,
      expiresAt: user.verificationExpiresAt,
      now: now,
      expired: user.verificationExpiresAt < now,
    });

    if (user.verificationOtp !== otp) {
      console.log('OTP mismatch');
      return NextResponse.json(
        { error: 'Invalid verification code. Please check and try again.' },
        { status: 400 }
      );
    }

    if (user.verificationExpiresAt < now) {
      console.log('OTP expired');
      return NextResponse.json(
        { error: 'Verification code has expired. Please request a new code.' },
        { status: 400 }
      );
    }

    console.log('Verifying user...');
    await prisma.user.update({
      where: { email },
      data: {
        isVerified: true,
        verificationOtp: null,
        verificationExpiresAt: null,
      },
    });

    console.log('User verified successfully');
    return NextResponse.json({ success: true, message: 'Email verified successfully' });
  } catch (error: any) {
    console.error('Error verifying email:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to verify email. Please try again.' },
      { status: 500 }
    );
  }
}


