'use client';
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="bg-white p-4 md:p-6 lg:p-8">
      <footer className="bg-black text-white px-6 py-12 lg:px-20 rounded-3xl">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Newsletter Section */}
            <div className="lg:col-span-1">
               <div className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                   <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                     <path d="M2 17l10 5 10-5"/>
                     <path d="M2 12l10 5 10-5"/>
                   </svg>
                 </div>
                 <span className="text-xl md:text-2xl font-semibold">Akwaaba Car Rental</span>
               </div>
              
               <h3 className="text-base md:text-lg mb-4">Subscribe to our newsletter</h3>
               
               <div className="flex flex-col sm:flex-row gap-2">
                 <input
                   type="email"
                   placeholder="Enter your email"
                   className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-lime-400 min-w-0"
                 />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            const input = e.currentTarget.parentElement?.querySelector('input[type="email"]') as HTMLInputElement;
                            if (input?.value) {
                              alert('Subscribed with: ' + input.value);
                              input.value = '';
                            }
                          }}
                          className="bg-lime-400 text-black font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-lime-500 transition-colors whitespace-nowrap text-sm md:text-base"
                        >
                          Subscribe!
                        </button>
               </div>
            </div>

            {/* Pages */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Pages</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-white hover:text-lime-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-white hover:text-lime-400 transition-colors">About Us</Link></li>
                <li><Link href="/fleet" className="text-white hover:text-lime-400 transition-colors">Our Fleet</Link></li>
                <li><Link href="/booking" className="text-white hover:text-lime-400 transition-colors">Book Now</Link></li>
                <li><Link href="/contact" className="text-white hover:text-lime-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Legal & Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal & Info</h4>
              <ul className="space-y-3">
                <li><Link href="/terms" className="text-white hover:text-lime-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/blog" className="text-white hover:text-lime-400 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-white hover:text-lime-400 transition-colors">FAQ</Link></li>
                <li><Link href="/about" className="text-white hover:text-lime-400 transition-colors">How It Works</Link></li>
                <li><Link href="/fleet" className="text-white hover:text-lime-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/fleet" className="text-white hover:text-lime-400 transition-colors">Daily Rentals</Link></li>
                <li><Link href="/fleet" className="text-white hover:text-lime-400 transition-colors">Weekly Rentals</Link></li>
                <li><Link href="/fleet" className="text-white hover:text-lime-400 transition-colors">Monthly Rentals</Link></li>
                <li><Link href="/contact" className="text-white hover:text-lime-400 transition-colors">Corporate Rentals</Link></li>
                <li><Link href="/contact" className="text-white hover:text-lime-400 transition-colors">Airport Pickup</Link></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-800 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400 text-sm">
              Designed by{' '}
                      <a href="#" className="text-lime-400 hover:text-lime-300 underline transition-colors">
                        SenGideons
                      </a>
                      , Powered by{' '}
                      <a href="#" className="text-lime-400 hover:text-lime-300 underline transition-colors">
                        Seven Group Solutions
                      </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;