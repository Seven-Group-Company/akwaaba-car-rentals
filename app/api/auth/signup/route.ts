import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { hashPassword } from '@/lib/auth';
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

  // Fallback: log email to console in development
  return null;
};

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password } = await request.json();

    console.log('Signup request received for:', email);

    if (!fullName || !email || !password) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Full name, email, and password are required.' },
        { status: 400 }
      );
    }

    console.log('Checking for existing user...');
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log('User already exists:', email);
      return NextResponse.json(
        { error: 'An account with this email already exists.' },
        { status: 400 }
      );
    }

    console.log('Creating new user...');
    const passwordHash = await hashPassword(password);
    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

    const newUser = await prisma.user.create({
      data: {
        email,
        passwordHash,
        fullName,
        verificationOtp: otp,
        verificationExpiresAt: expiresAt,
      },
    });

    console.log('User created successfully with ID:', newUser.id);
    console.log('OTP generated:', otp);

    const transporter = getTransporter();

    if (transporter) {
      console.log('Sending verification email...');
      await transporter.sendMail({
        from: process.env.ADMIN_EMAIL || '"Akwaaba Car Rental" <no-reply@akwaabacarrental.com>',
        to: email,
        subject: 'Verify your Akwaaba Car Rental account',
        text: `Your verification code is: ${otp}. It expires in ${OTP_EXPIRY_MINUTES} minutes.`,
        html: `<p>Your verification code is:</p><p style="font-size: 1.5rem; font-weight: bold;">${otp}</p><p>This code will expire in ${OTP_EXPIRY_MINUTES} minutes.</p>`,
      });
      console.log('Verification email sent');
    } else {
      console.log('⚠️ SMTP not configured. Verification OTP for', email, 'is:', otp);
    }

    return NextResponse.json({ success: true, message: 'Account created successfully' });
  } catch (error: any) {
    console.error('Error during user signup:', error);
    
    // Handle Prisma database connection errors
    if (error?.code === 'P1000') {
      return NextResponse.json(
        { 
          error: 'Database connection failed. Please check your DATABASE_URL in the .env file and ensure your database server is running.' 
        },
        { status: 500 }
      );
    }
    
    // Handle Prisma client errors
    if (error?.code?.startsWith('P')) {
      return NextResponse.json(
        { 
          error: `Database error: ${error.message || 'Please check your database configuration.'}` 
        },
        { status: 500 }
      );
    }
    
    // Generic error
    return NextResponse.json(
      { error: error?.message || 'Failed to create account. Please try again.' },
      { status: 500 }
    );
  }
}


