import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FileText, Shield, CreditCard, Calendar, AlertCircle, XCircle, Mail, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions - Akwaaba Car Rental',
  description: 'Read our terms and conditions, rental policies, and requirements.',
};

export default function TermsPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@akwaabacarrental.com';

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
                Terms & Conditions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              Terms & Conditions
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Please read these terms and conditions carefully before booking a vehicle with Akwaaba Car Rental.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Rental Agreement */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Rental Agreement</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  By booking a vehicle with Akwaaba Car Rental, you agree to the following terms and conditions.
                  Please read them carefully before making a reservation. Your use of our services constitutes
                  acceptance of these terms.
                </p>
              </div>

              {/* Rental Requirements */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Rental Requirements</h2>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Valid driver&apos;s license (minimum age: 23 years with at least one year of driving experience)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Valid identification document (National ID, Passport, or Driver&apos;s License)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Credit or debit card for security deposit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Proof of insurance (if required for your rental type)</span>
                  </li>
                </ul>
              </div>

              {/* Rental Period */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Rental Period</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The rental period begins at the agreed pick-up date and time and ends at the agreed drop-off
                  date and time. Late returns may incur additional charges as specified in your rental agreement.
                </p>
                <div className="bg-black rounded-lg p-4 border border-zinc-800">
                  <p className="text-gray-400 text-sm">
                    <strong className="text-white">Note:</strong> Please return the vehicle on time to avoid late fees.
                    Contact us if you need to extend your rental period.
                  </p>
                </div>
              </div>

              {/* Pricing and Payment */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Pricing and Payment</h2>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>All prices are quoted in Ghana Cedis (GHS) unless otherwise stated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>A security deposit is required at the time of rental</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Additional charges may apply for late returns, fuel, damages, or traffic violations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Refunds are subject to our cancellation policy outlined below</span>
                  </li>
                </ul>
              </div>

              {/* Insurance */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Insurance</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All our vehicles are fully insured. However, renters are responsible for any damages caused
                  by negligence, misuse, or violation of traffic laws. The security deposit may be used to cover
                  such damages.
                </p>
                <div className="bg-black rounded-lg p-4 border border-zinc-800 mt-4">
                  <p className="text-gray-400 text-sm">
                    <strong className="text-white">Important:</strong> Please drive responsibly and follow all traffic
                    regulations. Any damages or violations will be charged accordingly.
                  </p>
                </div>
              </div>

              {/* Vehicle Use Restrictions */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Vehicle Use Restrictions</h2>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Vehicles must be used only for legal purposes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>No smoking inside the vehicle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>No pets allowed unless prior arrangement is made</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Vehicles must not be used for racing, towing, or off-road activities (unless specified)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Only authorized drivers listed in the rental agreement may drive the vehicle</span>
                  </li>
                </ul>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Cancellation Policy</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-black rounded-lg p-4 border border-zinc-800">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold mb-1">48+ Hours Before Rental</p>
                        <p className="text-gray-400 text-sm">Full refund</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black rounded-lg p-4 border border-zinc-800">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold mb-1">24-48 Hours Before Rental</p>
                        <p className="text-gray-400 text-sm">50% refund</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black rounded-lg p-4 border border-zinc-800">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold mb-1">Less Than 24 Hours Before</p>
                        <p className="text-gray-400 text-sm">No refund</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liability */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Liability</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Akwaaba Car Rental is not liable for any personal injury, loss, or damage to personal property
                  during the rental period. Renters are responsible for their own safety and the safety of passengers.
                  We recommend that all passengers use seat belts at all times.
                </p>
              </div>

              {/* Contact Section */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-lime-400" />
                  <h2 className="text-2xl md:text-3xl font-bold">Questions?</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  For questions about these terms and conditions, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="group inline-flex items-center gap-3 bg-lime-400 text-black px-6 py-3 rounded-full hover:bg-lime-500 transition-colors font-medium"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 border-2 border-lime-400 text-lime-400 px-6 py-3 rounded-full hover:bg-lime-400 hover:text-black transition-all font-medium"
                  >
                    <span>Contact Page</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              {/* Last Updated */}
              <div className="pt-8 border-t border-zinc-800">
                <p className="text-sm text-gray-400">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
