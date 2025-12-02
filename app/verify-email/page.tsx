'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { Mail } from 'lucide-react';

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialEmail = searchParams.get('email') || '';

  const [email, setEmail] = useState(initialEmail);
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (!email || !otp) {
      setError('Email and verification code are required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to verify email. Please try again.');
        setIsSubmitting(false);
        return;
      }

      setInfo('Email verified successfully. You can now sign in.');
      setTimeout(() => router.push('/signin'), 800);
    } catch {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    setError(null);
    setInfo(null);

    if (!email) {
      setError('Enter your email to resend the code.');
      return;
    }

    try {
      const res = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to resend code. Please try again.');
        return;
      }

      setInfo('A new verification code has been sent to your email.');
    } catch {
      setError('Something went wrong while resending the code.');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold">Akwaaba Car Rental</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-0.5 bg-lime-400" />
            <span className="text-lime-400 text-xs font-medium tracking-wider uppercase">
              Verify Email
            </span>
            <div className="w-10 h-0.5 bg-lime-400" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Check your inbox</h1>
          <p className="text-gray-400 text-sm md:text-base">
            We&apos;ve sent a 6‑digit OTP code to your email. Enter it below to verify your account
            and complete sign up.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-800 space-y-6">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="verify-email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  id="verify-email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="verify-otp"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Verification code (OTP)
              </label>
              <input
                type="text"
                id="verify-otp"
                name="otp"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all tracking-[0.4em] text-center"
                placeholder="••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full bg-lime-400 text-black py-3 rounded-full font-semibold hover:bg-lime-500 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Verifying...' : 'Verify Email'}</span>
            </button>

            {error && (
              <p className="text-xs text-red-400 text-center">{error}</p>
            )}
            {info && !error && (
              <p className="text-xs text-lime-400 text-center">{info}</p>
            )}
          </form>

          <p className="text-xs md:text-sm text-gray-400 text-center">
            Didn&apos;t receive the code?{' '}
            <button
              type="button"
              onClick={handleResend}
              className="text-lime-400 hover:text-lime-300 underline-offset-2 underline"
            >
              Resend OTP
            </button>
            .
          </p>

          <p className="text-[11px] md:text-xs text-gray-500 text-center leading-relaxed">
            Once your email is verified, you&apos;ll be able to sign in and manage your bookings.
          </p>

          <p className="text-[11px] md:text-xs text-gray-500 text-center leading-relaxed">
            Already verified?{' '}
            <Link href="/signin" className="text-lime-400 hover:text-lime-300">
              Go to sign in
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold">Akwaaba Car Rental</span>
          </div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </main>
    }>
      <VerifyEmailContent />
    </Suspense>
  );
}

