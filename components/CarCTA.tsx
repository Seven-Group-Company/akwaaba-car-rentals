import React from 'react';
import Link from 'next/link';
import { Car, Shield, Clock, Star } from 'lucide-react';

const CarCTASection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* Placeholder for background image - replace with your image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <img
            src="/images/cta.webp"
            alt="Car interior"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 w-full">
          <div className="max-w-2xl mx-auto md:ml-auto md:mr-0">
            {/* Badge */}
            <div className="mb-4 md:mb-6">
              <span className="inline-flex items-center text-lime-400 text-sm md:text-xl font-light tracking-wide">
                <span className="w-2 h-2 bg-lime-400 rounded-full mr-3" />
                WHY CHOOSE US?
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 md:mb-8 leading-tight">
              Comfortable Rides
              <br />
              for Every Journey.
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6 md:mb-10 max-w-xl">
              To ensure top performance and safety, we maintain our vehicles regularly and replace parts proactively. Our pricing structure is straightforward and honest, providing clear cost breakdowns without hidden charges. We aim to deliver a comfortable and enjoyable rental journey with attentive customer service at every step.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 md:mb-10 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4">
                <Car className="w-6 h-6 sm:w-8 sm:h-8 text-lime-400 mb-2 sm:mb-3" />
                <h3 className="text-white font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">Wide Fleet Selection</h3>
                <p className="text-gray-300 text-xs">
                  Choose from our diverse range of well-maintained vehicles
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-lime-400 mb-2 sm:mb-3" />
                <h3 className="text-white font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">Fully Insured</h3>
                <p className="text-gray-300 text-xs">
                  All our vehicles come with comprehensive insurance coverage
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-lime-400 mb-2 sm:mb-3" />
                <h3 className="text-white font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">24/7 Support</h3>
                <p className="text-gray-300 text-xs">
                  Round-the-clock customer support for your peace of mind
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-lime-400 mb-2 sm:mb-3" />
                <h3 className="text-white font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">Best Rates</h3>
                <p className="text-gray-300 text-xs">
                  Competitive pricing with transparent, no-hidden-fees policy
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/booking"
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium text-sm sm:text-base rounded-full hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              Book Your Ride
              <svg
                className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCTASection;