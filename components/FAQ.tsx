'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { 
    question: 'What documents do I need to rent a car with Akwaaba Car Rental?',
    answer:
      'You will need a valid driver’s license, a national ID or passport, and a valid payment method (such as a debit or credit card). Additional documents may be required for corporate or long-term rentals.'
  },
  { 
    question: 'What is the minimum age requirement for renting a car?',
    answer:
      'The minimum age to rent a car is typically 23 years, with at least one year of valid driving experience. Drivers under a certain age may be subject to additional requirements or fees.'
  },
  { 
    question: 'Can I modify or cancel my booking?',
    answer:
      'Yes, you can modify or cancel your booking by contacting our support team or using the contact details provided in your confirmation email. Changes are subject to availability and our cancellation policy.'
  },
  { 
    question: 'Do you offer one-way rentals?',
    answer:
      'One-way rentals may be available between selected locations. Please reach out to us with your planned route so we can confirm availability and any applicable one-way fees.'
  },
  { 
    question: 'What happens if the car breaks down during my rental?',
    answer:
      'If your car breaks down, contact our support line immediately. We will assist you with roadside support and either repair the vehicle or arrange a replacement, depending on the situation and your location.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-lime-400 tracking-wide">FAQ</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Frequently Asked<br />Questions
              </h1>
            </div>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Find quick answers to the most common questions about our rental process,
              requirements, and support so you can book with confidence.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-lime-400 text-black px-6 py-3 rounded-full hover:bg-lime-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Get In Touch</span>
            </Link>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-2xl shadow-sm overflow-hidden transition-all border border-zinc-800"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-zinc-800 transition-colors"
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-lime-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6 text-gray-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}