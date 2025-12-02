import Link from 'next/link';
import { Mail, Lock, LogIn } from 'lucide-react';

export const metadata = {
  title: 'Sign In - Akwaaba Car Rental',
  description: 'Sign in to manage your bookings, view rental history, and access admin tools.',
};

export default function SignInPage() {
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
              Sign In
            </span>
            <div className="w-10 h-0.5 bg-lime-400" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Sign in to manage bookings, view history, or access admin tools.
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
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-gray-400 hover:text-lime-400 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group w-full bg-lime-400 text-black py-3 rounded-full font-semibold hover:bg-lime-500 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <span>Sign In</span>
              <LogIn className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>

          <p className="text-xs md:text-sm text-gray-400 text-center">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-lime-400 hover:text-lime-300">
              Create a new account
            </Link>
            .
          </p>

          <p className="text-[11px] md:text-xs text-gray-500 text-center leading-relaxed">
            Admins and staff can also use this page to access internal tools once authentication is
            configured.
          </p>
        </div>
      </div>
    </main>
  );
}


