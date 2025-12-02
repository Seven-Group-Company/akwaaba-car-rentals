import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

export default function BookingSuccessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Booking Request Submitted!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for your booking request. We have received your information and will contact you shortly to confirm your reservation.
            </p>
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Return to Home
              </Link>
              <Link
                href="/fleet"
                className="inline-block ml-4 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                View Fleet
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

