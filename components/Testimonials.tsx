import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Clean cars, friendly staff, and fast booking. Highly recommend",
      name: "Sophie Moore",
      location: "Chicago",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
      quote: "Akwaaba Car Rental made my trip smooth and stress-free. Excellent service!",
      name: "Kwame A.",
      location: "Accra, Ghana",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    },
    {
      quote: "Professional drivers and reliable vehicles. Will definitely rent again.",
      name: "Lilly Woods",
      location: "Washington",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  return (
    <div className="bg-black text-white px-6 py-12 md:py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="mb-8 lg:mb-0">
            <p className="text-sm text-lime-400 mb-4">TESTIMONIALS</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              What customers<br />say about us
            </h1>
          </div>
          
          <div className="text-gray-400 max-w-md text-sm leading-relaxed lg:mt-12">
          Your comfort and satisfaction are at the heart of what we do. See how we’re making travel easier, one trip at a time. Because a great journey deserves a great car. Your stories inspire us to keep improving.
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300"
            >
              <p className="text-2xl mb-12 leading-relaxed">
                <span className="text-gray-500">&quot;</span>
                {index === 0 && (
                  <>
                    <span className="text-gray-500">Clean cars, friendly staff, </span>
                    <span className="text-white">and fast booking.  </span>
                    <br />
                    <span className="text-gray-500">Highly recommend</span>
                  </>
                )}
                {index === 1 && (
                  <>
                    <span className="text-white">Akwaaba Car Rental made my trip smooth and </span>
                    <br />
                    <span className="text-white">stress-free. Excellent service</span>
                  </>
                )}
                {index === 2 && (
                  <>
                    <span className="text-white">Professional drivers and reliable vehicles. </span>
                    <span className="text-gray-500"> </span>
                    <br />
                    <span className="text-white">Will definitely rent again.</span>
                  </>
                )}
                <span className="text-white">&quot;</span>
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;