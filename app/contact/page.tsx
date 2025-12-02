'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '233XXXXXXXXX';
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE || '+233XXXXXXXXX';
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@akwaabacarrental.com';
  const location = process.env.NEXT_PUBLIC_LOCATION || 'Accra, Ghana';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real application, you would send this to an API endpoint
    setTimeout(() => {
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

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
                Contact Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              Get in Touch
              <br />
              We're Here to Help
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              We'd love to hear from you. Get in touch with us through any of the following ways, and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <a
                      href={`tel:${phoneNumber}`}
                className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-lime-400 transition-all duration-300 group"
                    >
                <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
                  <Phone className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Phone</h3>
                <p className="text-gray-400 text-sm">{phoneNumber}</p>
              </a>

                    <a
                      href={`mailto:${email}`}
                className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-lime-400 transition-all duration-300 group"
                    >
                <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
                  <Mail className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-gray-400 text-sm break-all">{email}</p>
              </a>

                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-lime-400 transition-all duration-300 group"
                    >
                <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-400 text-sm">Chat with us</p>
              </a>

              <div className="bg-black rounded-xl p-6 border border-zinc-800">
                <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-gray-400 text-sm">{location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Send us a Message</h2>
                  <div className="w-16 h-0.5 bg-lime-400 mb-6"></div>
                  <p className="text-gray-400 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                      placeholder="Your full name"
                  />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                  />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                      placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                      rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                    className="group w-full bg-lime-400 text-black py-4 rounded-full font-semibold hover:bg-lime-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                </button>
              </form>
              </div>

              {/* Additional Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
                  <div className="w-16 h-0.5 bg-lime-400 mb-6"></div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    We're located in the heart of Accra, Ghana. Feel free to visit us during our business hours.
                  </p>
                  <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Office Address</h3>
                        <p className="text-gray-400">{location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Hours</h2>
                  <div className="w-16 h-0.5 bg-lime-400 mb-6"></div>
                  <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 space-y-4">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">Monday - Friday</span>
                          <span className="text-gray-400">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">Saturday</span>
                          <span className="text-gray-400">9:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Sunday</span>
                          <span className="text-gray-400">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Contact Us?</h2>
                  <div className="w-16 h-0.5 bg-lime-400 mb-6"></div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400">
                        Get personalized recommendations for the perfect vehicle for your needs
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400">
                        Inquire about special rates for long-term or corporate rentals
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400">
                        Get assistance with booking modifications or cancellations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400">
                        Report any issues or provide feedback about your experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              For urgent inquiries or immediate booking assistance, reach out to us directly via phone or WhatsApp. We're here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                className="group inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 border border-gray-300 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Call Now</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 border-2 border-lime-400 text-lime-400 px-8 py-4 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">WhatsApp Us</span>
              </a>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
