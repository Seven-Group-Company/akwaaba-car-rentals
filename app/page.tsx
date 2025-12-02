import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/About';
import FleetShowcase from '@/components/Fleets';
import CarCTASection from '@/components/CarCTA';
import TestimonialsSection from '@/components/Testimonials';
import { Car, Shield, Clock, Star } from 'lucide-react';
import FAQSection from '@/components/FAQ';
import AutomotiveBlog from '@/components/Blog';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Fleet Section */}
        <FleetShowcase />

        {/* Car CTA Section */}
        <CarCTASection />

        {/* Testimonials Section */}
        <TestimonialsSection /> 

        {/* FAQs Section */}
        <FAQSection />

        {/* Blog Section */}
        <AutomotiveBlog />

      </main>
      <Footer />
    </>
  );
}

