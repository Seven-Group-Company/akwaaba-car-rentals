'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/img-1.webp"
            alt="Car Rental Hero"
            fill
            priority
            className="object-cover"
            quality={90}
            sizes="100vw"
          />
        </div>
        {/*<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-8 md:px-16 lg:px-24 py-12">
        {/* Top Section: Badge and Headline */}
        <div className="flex flex-col items-start space-y-6">
          {/* Badge */}
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
            <span className="text-sm md:text-base font-light tracking-wide text-white">
              Reliable. Affordable. Comfortable .Your Journey Starts with Akwaaba Car Rental.
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight text-white">
            Your Ride, Ready
            <br />
            When You Are.
          </h1>
        </div>

        {/* Bottom Section: Description and CTA */}
        <div className="flex flex-col lg:flex-row justify-end items-end gap-12 lg:gap-24">
          <div className="flex-shrink-0 max-w-md space-y-8">
            <p className="text-base md:text-lg font-light leading-relaxed text-white">
            Enjoy stress-free car rentals in Ghana with well-maintained vehicles, flexible terms, and exceptional customer service.
            </p>
            <Link 
              href="/fleet" 
              className="group inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 border border-gray-300 shadow-lg"
            >
              <span className="font-medium">Explore Our Fleet</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
}