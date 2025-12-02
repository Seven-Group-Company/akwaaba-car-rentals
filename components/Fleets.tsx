'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  image: string;
  passengers: number;
  luggage: number;
  price: number;
  year: number;
  mileage?: number;
  transmission: string;
}

const FleetShowcase = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Mercedes S-Class",
      type: "Luxury Sedan",
      image: "images/fleets/car-1.webp",
      passengers: 5,
      luggage: 4,
      price: 120,
      year: 2024,
      mileage: 5800,
      transmission: "Automatic"
    },
    {
      id: 2,
      name: "BMW 7 Series",
      type: "Executive Sedan",
      image: "images/fleets/car-2.webp",
      passengers: 5,
      luggage: 4,
      price: 110,
      year: 2024,
      mileage: 6200,
      transmission: "Automatic"
    },
    {
      id: 3,
      name: "Mercedes V-Class",
      type: "Van",
      image: "images/fleets/car-3.webp",
      passengers: 6,
      luggage: 6,
      price: 100,
      year: 2023,
      mileage: 8500,
      transmission: "Automatic"
    },
    {
      id: 4,
      name: "Range Rover",
      type: "Luxury SUV",
      image: "images/fleets/car-4.webp",
      passengers: 5,
      luggage: 4,
      price: 130,
      year: 2024,
      mileage: 4500,
      transmission: "Automatic"
    }
  ];

  const itemsPerPage = 8;
  const totalPages = Math.ceil(vehicles.length / itemsPerPage);
  
  const getCurrentVehicles = () => {
    const start = currentPage * itemsPerPage;
    return vehicles.slice(start, start + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight text-white">OUR FLEET</h1>
          <p className="text-base md:text-lg font-light leading-relaxed text-gray-400">Affordable vehicles ideal for city movements.</p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {getCurrentVehicles().map((vehicle) => (
            <div 
              key={vehicle.id}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 bg-gray-100 overflow-hidden p-4">
                <img 
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Year Badge - Lime oval in top right */}
                {vehicle.year && (
                  <div className="absolute top-6 right-6 bg-lime-400 text-black px-3 py-1.5 rounded-full text-xs font-semibold">
                    {vehicle.year}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-5">
                {/* Car Name - Large bold text */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {vehicle.name}
                </h3>
                
                {/* Price - Large bold number */}
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">GHS </span>
                  <span className="text-3xl font-bold text-white">{vehicle.price}</span>
                  <span className="text-gray-400 text-sm"> / DAY</span>
                </div>
                
                {/* Specifications Box - Dark grey rounded rectangle */}
                <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Mileage */}
                    {vehicle.mileage && (
                      <div className="flex flex-col items-center">
                        <svg className="w-5 h-5 text-lime-400 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-sm font-medium text-gray-300">{vehicle.mileage.toLocaleString()}</span>
                      </div>
                    )}
                    
                    {/* Transmission */}
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 text-lime-400 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-300">{vehicle.transmission}</span>
                    </div>
                    
                    {/* Passengers */}
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 text-lime-400 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-300">{vehicle.passengers}</span>
                    </div>
                    
                    {/* Luggage */}
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 text-lime-400 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      <span className="text-sm font-medium text-gray-300">{vehicle.luggage}</span>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button - Lime rounded button */}
                <button className="w-full bg-lime-400 hover:bg-lime-500 text-black text-sm font-medium py-2.5 px-6 rounded-full transition-colors duration-300">
                  See Full Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mb-8">
            <button
              onClick={prevPage}
              className="p-3 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'bg-lime-400 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500 w-3'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="p-3 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Show All Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/fleet"
            className="group inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 border border-gray-300 shadow-lg"
          >
            <span className="font-medium">Show All</span>
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
  );
};

export default FleetShowcase;