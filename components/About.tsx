import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <div className="bg-black text-white px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* About Us Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-0.5 bg-lime-400"></div>
          <span className="text-lime-400 text-sm font-medium tracking-wider uppercase">
            About Us
          </span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Headline */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
            Akwaaba Car Rental is a trusted transportation service provider dedicated to offering safe, reliable, and affordable car rental services across Ghana.
            </h1>
          </div>

          {/* Right Column - Stats and Description */}
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {/* Stat 1 */}
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  2.5<span className="text-lime-400">K+</span>
                </div>
                <div className="text-gray-400 text-sm">Total Bookings</div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  300<span className="text-lime-400">+</span>
                </div>
                <div className="text-gray-400 text-sm">Models In Stock</div>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  99<span className="text-lime-400">%</span>
                </div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  50<span className="text-lime-400">+</span>
                </div>
                <div className="text-gray-400 text-sm">Daily Bookings</div>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-gray-400 text-base leading-relaxed">
            We serve individuals, businesses, and travelers who need dependable vehicles for personal use, business trips, special events, or long-distance journeys. We deliver exceptional car rental services that combine comfort, convenience, and professionalism.
            </p>

            {/* Learn More Button */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-lime-400 text-lime-400 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
            >
              <span className="font-medium">Learn More</span>
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-lime-400 text-black group-hover:bg-black group-hover:text-lime-400 transition-all duration-300">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}