import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import nodemailer from 'nodemailer';

const OTP_EXPIRY_MINUTES = 15;

const getTransporter = () => {
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  ) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return null;
};

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    console.log('Resend OTP request for:', email);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'No account found with this email address.' },
        { status: 400 }
      );
    }

    if (user.isVerified) {
      return NextResponse.json(
        { error: 'This email is already verified.' },
        { status: 400 }
      );
    }

    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

    await prisma.user.update({
      where: { email },
      data: {
        verificationOtp: otp,
        verificationExpiresAt: expiresAt,
      },
    });

    console.log('New OTP generated for', email, ':', otp);

    const transporter = getTransporter();

    if (transporter) {
      await transporter.sendMail({
        from: process.env.ADMIN_EMAIL || '"Akwaaba Car Rental" <no-reply@akwaabacarrental.com>',
        to: email,
        subject: 'Verify your Akwaaba Car Rental account',
        text: `Your verification code is: ${otp}. It expires in ${OTP_EXPIRY_MINUTES} minutes.`,
        html: `<p>Your verification code is:</p><p style="font-size: 1.5rem; font-weight: bold;">${otp}</p><p>This code will expire in ${OTP_EXPIRY_MINUTES} minutes.</p>`,
      });
      console.log('Verification email sent');
    } else {
      console.log('⚠️ SMTP not configured. New OTP for', email, 'is:', otp);
    }

    return NextResponse.json({ success: true, message: 'New verification code sent' });
  } catch (error: any) {
    console.error('Error resending OTP:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to resend verification code. Please try again.' },
      { status: 500 }
    );
  }
}

