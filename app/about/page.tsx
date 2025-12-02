import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, Heart, Shield, Clock, Car, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Akwaaba Car Rental',
  description: 'Learn about Akwaaba Car Rental - our story, mission, and values.',
};

export default function AboutPage() {
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
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              Your Trusted Partner
              <br />
              in Car Rental
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Akwaaba Car Rental is a trusted transportation service provider dedicated to offering safe, reliable, and affordable car rental services across Ghana.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Our Story
                </h2>
                <div className="w-16 h-0.5 bg-lime-400 mb-8"></div>
              </div>
              <div className="space-y-6">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Akwaaba Car Rental was founded with a simple mission: to provide reliable, affordable, and customer-focused car rental services. The word "Akwaaba" means "welcome" in the Akan language, and that's exactly how we want every customer to feel when they interact with us.
              </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Since our inception, we have been committed to maintaining a fleet of well-maintained vehicles and providing exceptional service to all our clients. Whether you need a car for a day, a week, or a month, we're here to make your journey comfortable and hassle-free.
              </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  We serve individuals, businesses, and travelers who need dependable vehicles for personal use, business trips, special events, or long-distance journeys. We deliver exceptional car rental services that combine comfort, convenience, and professionalism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  2.5<span className="text-lime-400">K+</span>
                </div>
                <div className="text-gray-400 text-sm md:text-base">Total Bookings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  300<span className="text-lime-400">+</span>
                </div>
                <div className="text-gray-400 text-sm md:text-base">Models In Stock</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  99<span className="text-lime-400">%</span>
                </div>
                <div className="text-gray-400 text-sm md:text-base">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  50<span className="text-lime-400">+</span>
                </div>
                <div className="text-gray-400 text-sm md:text-base">Daily Bookings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Our Mission
                </h2>
                <div className="w-16 h-0.5 bg-lime-400 mb-8"></div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  To be the leading car rental service provider by offering reliable vehicles, competitive pricing, and exceptional customer service that exceeds expectations. We aim to deliver a comfortable and enjoyable rental journey with attentive customer service at every step.
                </p>
              </div>
              <div className="bg-zinc-900 rounded-2xl p-8 md:p-12">
                <Target className="w-16 h-16 text-lime-400 mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Commitment</h3>
                <p className="text-gray-300 leading-relaxed">
                  We continuously invest in our fleet, technology, and team to ensure we remain at the forefront of the car rental industry. Your trust and satisfaction drive us to improve every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-lime-400"></div>
                <span className="text-lime-400 text-sm font-medium tracking-wider uppercase">
                  Our Values
                </span>
                <div className="w-12 h-0.5 bg-lime-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                What Drives Us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-lime-400 transition-colors">
                <Users className="w-12 h-12 text-lime-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Customer First</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our customers are at the heart of everything we do. We prioritize their needs and satisfaction above all.
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-lime-400 transition-colors">
                <Award className="w-12 h-12 text-lime-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-400 leading-relaxed">
                  We strive for excellence in every aspect of our service, from vehicle maintenance to customer care.
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-lime-400 transition-colors">
                <Heart className="w-12 h-12 text-lime-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-400 leading-relaxed">
                  We conduct our business with honesty, transparency, and ethical practices in all our dealings.
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-lime-400 transition-colors">
                <Shield className="w-12 h-12 text-lime-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Reliability</h3>
                <p className="text-gray-400 leading-relaxed">
                  You can count on us to deliver on our promises and be there when you need us most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-lime-400"></div>
                <span className="text-lime-400 text-sm font-medium tracking-wider uppercase">
                  Why Choose Us
                </span>
                <div className="w-12 h-0.5 bg-lime-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Experience the Difference
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <Car className="w-10 h-10 text-lime-400" />
                <h3 className="text-xl font-bold">Wide Fleet Selection</h3>
                <p className="text-gray-400 leading-relaxed">
                  Choose from our diverse range of well-maintained vehicles, from economy to luxury, all regularly serviced and ready for your journey.
                </p>
              </div>
              <div className="space-y-4">
                <Shield className="w-10 h-10 text-lime-400" />
                <h3 className="text-xl font-bold">Fully Insured</h3>
                <p className="text-gray-400 leading-relaxed">
                  All our vehicles come with comprehensive insurance coverage, giving you peace of mind throughout your rental period.
                </p>
              </div>
              <div className="space-y-4">
                <Clock className="w-10 h-10 text-lime-400" />
                <h3 className="text-xl font-bold">24/7 Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Round-the-clock customer support for your peace of mind. We're always here to help, no matter when you need us.
                </p>
              </div>
              <div className="space-y-4">
                <MapPin className="w-10 h-10 text-lime-400" />
                <h3 className="text-xl font-bold">Nationwide Coverage</h3>
                <p className="text-gray-400 leading-relaxed">
                  Serving customers across Ghana with convenient pickup and drop-off locations to make your rental experience seamless.
                </p>
              </div>
              <div className="space-y-4">
                <Award className="w-10 h-10 text-lime-400" />
                <h3 className="text-xl font-bold">Best Rates</h3>
                <p className="text-gray-400 leading-relaxed">
                  Competitive pricing with transparent, no-hidden-fees policy. We believe in fair and honest pricing for all our customers.
                </p>
              </div>
              <div className="space-y-4">
                <Heart className="w-10 h-10 text-lime-400" />
                <h3 className="text-xl font-bold">Customer Care</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our team is trained to provide personalized service and help you find the perfect vehicle for your specific needs.
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Experience the Akwaaba difference. Book your vehicle today and discover why thousands of customers trust us for their transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link
                href="/booking"
                className="group inline-flex items-center space-x-3 border-2 border-lime-400 text-lime-400 px-8 py-4 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
              >
                <span className="font-medium">Book Now</span>
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
        </section>
      </main>
      <Footer />
    </>
  );
}
