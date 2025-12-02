'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Calendar, Clock, MapPin, Car, User, Mail, Phone, FileText, Send } from 'lucide-react';

export default function BookingPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    carType: '',
    pickUpDate: '',
    pickUpTime: '',
    dropOffDate: '',
    dropOffTime: '',
    location: '',
    additionalNotes: '',
  });

  const carTypes = [
    'Economy Sedan',
    'SUV',
    'Luxury Sedan',
    'Compact Car',
    'Van',
    'Pickup Truck',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          pickUpDate: `${formData.pickUpDate}T${formData.pickUpTime}`,
          dropOffDate: `${formData.dropOffDate}T${formData.dropOffTime}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Booking request submitted successfully! We will contact you soon.');
        router.push('/booking/success');
      } else {
        toast.error(data.error || 'Failed to submit booking. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-8 md:pb-10 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-lime-400"></div>
              <span className="text-lime-400 text-sm font-medium tracking-wider uppercase">
                Book Now
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              Reserve Your
              <br />
              Perfect Ride
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Fill out the form below to request a booking. We&apos;ll get back to you shortly to confirm your reservation.
            </p>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="pt-6 md:pt-8 pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Personal Information</h2>
                </div>
                <div className="space-y-6">
              <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                          placeholder="+233 XX XXX XXXX"
                  />
                      </div>
                </div>

                <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                  />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle Selection Section */}
              <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <Car className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Vehicle Selection</h2>
                </div>
                <div className="space-y-6">
              <div>
                    <label htmlFor="carType" className="block text-sm font-medium text-gray-300 mb-2">
                  Type of Car/Service *
                </label>
                    <div className="relative">
                      <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                <select
                  id="carType"
                  name="carType"
                  required
                  value={formData.carType}
                  onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                        <option value="" className="bg-black">Select a vehicle type</option>
                  {carTypes.map((type) => (
                          <option key={type} value={type} className="bg-black">
                      {type}
                    </option>
                  ))}
                </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pick-up Details Section */}
              <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Pick-up Details</h2>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="pickUpDate" className="block text-sm font-medium text-gray-300 mb-2">
                    Pick-up Date *
                  </label>
                  <input
                    type="date"
                    id="pickUpDate"
                    name="pickUpDate"
                    required
                    value={formData.pickUpDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all [color-scheme:dark]"
                  />
                </div>

                <div>
                    <label htmlFor="pickUpTime" className="block text-sm font-medium text-gray-300 mb-2">
                    Pick-up Time *
                  </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="time"
                    id="pickUpTime"
                    name="pickUpTime"
                    required
                    value={formData.pickUpTime}
                    onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all [color-scheme:dark]"
                  />
                    </div>
                  </div>
                </div>
              </div>

              {/* Drop-off Details Section */}
              <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Drop-off Details</h2>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="dropOffDate" className="block text-sm font-medium text-gray-300 mb-2">
                    Drop-off Date *
                  </label>
                  <input
                    type="date"
                    id="dropOffDate"
                    name="dropOffDate"
                    required
                    value={formData.dropOffDate}
                    onChange={handleChange}
                    min={formData.pickUpDate || new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all [color-scheme:dark]"
                  />
                </div>

                <div>
                    <label htmlFor="dropOffTime" className="block text-sm font-medium text-gray-300 mb-2">
                    Drop-off Time *
                  </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="time"
                    id="dropOffTime"
                    name="dropOffTime"
                    required
                    value={formData.dropOffTime}
                    onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all [color-scheme:dark]"
                  />
                    </div>
                  </div>
                </div>
              </div>

              {/* Location & Additional Information Section */}
              <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Location & Additional Information</h2>
                </div>
                <div className="space-y-6">
              <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                      Pick-up Location *
                </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                        placeholder="Enter pick-up location or address"
                        className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                />
                    </div>
              </div>

              <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Notes
                </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                        rows={5}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Any special requests or additional information..."
                        className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all resize-none"
                />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-lime-400 text-black py-4 rounded-full font-semibold hover:bg-lime-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Booking Request</span>
                    <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Happens Next?</h2>
              <div className="w-16 h-0.5 bg-lime-400 mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg">
                After submitting your booking request, our team will review it and get back to you within 24 hours.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black rounded-xl p-6 border border-zinc-800 text-center">
                <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-lime-400">1</span>
                </div>
                <h3 className="font-bold mb-2">Submit Request</h3>
                <p className="text-gray-400 text-sm">Fill out the form with your booking details</p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-zinc-800 text-center">
                <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-lime-400">2</span>
                </div>
                <h3 className="font-bold mb-2">We Review</h3>
                <p className="text-gray-400 text-sm">Our team reviews your request and checks availability</p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-zinc-800 text-center">
                <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-lime-400">3</span>
                </div>
                <h3 className="font-bold mb-2">Confirmation</h3>
                <p className="text-gray-400 text-sm">We contact you to confirm your booking</p>
              </div>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
