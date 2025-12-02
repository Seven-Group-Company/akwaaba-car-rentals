import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';

export const metadata = {
  title: 'Forgot Password - Akwaaba Car Rental',
  description: 'Reset your Akwaaba Car Rental account password securely using a one-time code.',
};

export default function ForgotPasswordPage() {
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
              Reset Password
            </span>
            <div className="w-10 h-0.5 bg-lime-400" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Forgot your password?</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Enter your email address and a one-time verification code will be sent to help you reset
            your password.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-800 space-y-6">
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                We&apos;ll send a 6‑digit OTP code to this email for verification.
              </p>
            </div>

            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Verification code (OTP)
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                maxLength={6}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all tracking-[0.4em] text-center"
                placeholder="••••••"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  New password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                    placeholder="Create a new password"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmNewPassword"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                    placeholder="Repeat new password"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group w-full bg-lime-400 text-black py-3 rounded-full font-semibold hover:bg-lime-500 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <span>Reset Password</span>
            </button>
          </form>

          <p className="text-xs md:text-sm text-gray-400 text-center">
            Remembered your password?{' '}
            <Link href="/signin" className="text-lime-400 hover:text-lime-300">
              Back to sign in
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}


