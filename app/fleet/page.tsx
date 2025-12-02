'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Car, Users, Luggage, Gauge, Settings, ArrowRight, CheckCircle } from 'lucide-react';

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
  available: boolean;
}

const fleetData: Vehicle[] = [
  {
    id: 1,
    name: "Mercedes S-Class",
    type: "Luxury Sedan",
    image: "/images/fleets/car-1.webp",
    passengers: 5,
    luggage: 4,
    price: 120,
    year: 2024,
    mileage: 5800,
    transmission: "Automatic",
    available: true,
  },
  {
    id: 2,
    name: "BMW 7 Series",
    type: "Executive Sedan",
    image: "/images/fleets/car-2.webp",
    passengers: 5,
    luggage: 4,
    price: 110,
    year: 2024,
    mileage: 6200,
    transmission: "Automatic",
    available: true,
  },
  {
    id: 3,
    name: "Mercedes V-Class",
    type: "Van",
    image: "/images/fleets/car-3.webp",
    passengers: 6,
    luggage: 6,
    price: 100,
    year: 2023,
    mileage: 8500,
    transmission: "Automatic",
    available: true,
  },
  {
    id: 4,
    name: "Range Rover",
    type: "Luxury SUV",
    image: "/images/fleets/car-4.webp",
    passengers: 5,
    luggage: 4,
    price: 130,
    year: 2024,
    mileage: 4500,
    transmission: "Automatic",
    available: true,
  },
  {
    id: 5,
    name: "Toyota Camry",
    type: "Economy Sedan",
    image: "/images/fleets/car-1.webp",
    passengers: 5,
    luggage: 3,
    price: 50,
    year: 2023,
    mileage: 12000,
    transmission: "Automatic",
    available: true,
  },
  {
    id: 6,
    name: "Honda CR-V",
    type: "SUV",
    image: "/images/fleets/car-2.webp",
    passengers: 5,
    luggage: 4,
    price: 80,
    year: 2023,
    mileage: 9500,
    transmission: "Automatic",
    available: true,
  },
  {
    id: 7,
    name: "Toyota Corolla",
    type: "Compact Car",
    image: "/images/fleets/car-3.webp",
    passengers: 5,
    luggage: 2,
    price: 40,
    year: 2024,
    mileage: 3200,
    transmission: "Automatic",
    available: true,
  },
  {
    id: 8,
    name: "Ford Transit",
    type: "Van",
    image: "/images/fleets/car-4.webp",
    passengers: 8,
    luggage: 8,
    price: 100,
    year: 2023,
    mileage: 11000,
    transmission: "Automatic",
    available: true,
  },
];

export default function FleetPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const vehicleTypes = ['all', ...Array.from(new Set(fleetData.map(v => v.type)))];

  const filteredVehicles = fleetData.filter(vehicle => {
    const matchesType = selectedType === 'all' || vehicle.type === selectedType;
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-lime-400"></div>
              <span className="text-lime-400 text-sm font-medium tracking-wider uppercase">
                Our Fleet
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              Choose Your
              <br />
              Perfect Vehicle
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Browse our diverse range of well-maintained vehicles. From economy to luxury, we have the perfect ride for every journey.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-6 md:px-12 lg:px-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Type Filter */}
              <div className="w-full md:w-auto">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full md:w-auto px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  {vehicleTypes.map((type) => (
                    <option key={type} value={type} className="bg-black capitalize">
                      {type === 'all' ? 'All Vehicles' : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Grid Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {filteredVehicles.length === 0 ? (
              <div className="text-center py-16">
                <Car className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No vehicles found matching your criteria.</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-gray-400">
                    Showing <span className="text-lime-400 font-semibold">{filteredVehicles.length}</span> vehicle{filteredVehicles.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                      className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-zinc-800 hover:border-lime-400/50"
                    >
                      {/* Image Container */}
                      <div className="relative h-56 bg-gray-100 overflow-hidden p-4">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-full object-cover rounded-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/placeholder-car.jpg';
                          }}
                        />
                        {/* Year Badge */}
                        {vehicle.year && (
                          <div className="absolute top-6 right-6 bg-lime-400 text-black px-3 py-1.5 rounded-full text-xs font-semibold">
                            {vehicle.year}
                  </div>
                        )}
                        {/* Available Badge */}
                      {vehicle.available && (
                          <div className="absolute top-6 left-6 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-lime-400 px-3 py-1.5 rounded-full text-xs font-semibold">
                            <CheckCircle className="w-3 h-3" />
                          Available
                          </div>
                      )}
                    </div>

                      {/* Content */}
                      <div className="p-5">
                        {/* Car Name */}
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {vehicle.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">{vehicle.type}</p>

                        {/* Price */}
                      <div className="mb-4">
                          <span className="text-gray-300 text-sm">GHS </span>
                          <span className="text-3xl font-bold text-white">{vehicle.price}</span>
                          <span className="text-gray-300 text-sm"> / DAY</span>
                        </div>

                        {/* Specifications Box */}
                        <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                          <div className="grid grid-cols-2 gap-3">
                            {/* Mileage */}
                            {vehicle.mileage && (
                              <div className="flex flex-col items-center">
                                <Gauge className="w-5 h-5 text-lime-400 mb-1.5" />
                                <span className="text-sm font-medium text-gray-300">
                                  {vehicle.mileage.toLocaleString()} km
                        </span>
                      </div>
                    )}

                            {/* Transmission */}
                            <div className="flex flex-col items-center">
                              <Settings className="w-5 h-5 text-lime-400 mb-1.5" />
                              <span className="text-sm font-medium text-gray-300">
                                {vehicle.transmission}
                              </span>
                            </div>

                            {/* Passengers */}
                            <div className="flex flex-col items-center">
                              <Users className="w-5 h-5 text-lime-400 mb-1.5" />
                              <span className="text-sm font-medium text-gray-300">
                                {vehicle.passengers}
                              </span>
                            </div>

                            {/* Luggage */}
                            <div className="flex flex-col items-center">
                              <Luggage className="w-5 h-5 text-lime-400 mb-1.5" />
                              <span className="text-sm font-medium text-gray-300">
                                {vehicle.luggage}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                    <Link
                          href={`/booking?carType=${encodeURIComponent(vehicle.type)}`}
                          className="group w-full bg-lime-400 hover:bg-lime-500 text-black text-sm font-medium py-2.5 px-6 rounded-full transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                          <span>Book Now</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Why Choose Our Fleet Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-lime-400"></div>
                <span className="text-lime-400 text-sm font-medium tracking-wider uppercase">
                  Why Choose Our Fleet
                </span>
                <div className="w-12 h-0.5 bg-lime-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Quality You Can Trust
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black rounded-xl p-6 border border-zinc-800 text-center">
                <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="font-bold mb-2">Well-Maintained</h3>
                <p className="text-gray-400 text-sm">
                  All vehicles undergo regular maintenance and safety checks to ensure your peace of mind.
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-zinc-800 text-center">
                <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Car className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="font-bold mb-2">Diverse Selection</h3>
                <p className="text-gray-400 text-sm">
                  From economy to luxury, we have vehicles to suit every need and budget.
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-zinc-800 text-center">
                <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Gauge className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="font-bold mb-2">Latest Models</h3>
                <p className="text-gray-400 text-sm">
                  Our fleet features the latest models with modern features and technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Contact us and we'll help you find the perfect vehicle for your needs. Our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 border border-gray-300 shadow-lg"
              >
                <span className="font-medium">Contact Us</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/booking"
                className="group inline-flex items-center space-x-3 border-2 border-lime-400 text-lime-400 px-8 py-4 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
              >
                <span className="font-medium">Book Now</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
