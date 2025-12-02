'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { format } from 'date-fns';

interface Booking {
  id: number;
  full_name: string;
  phone_number: string;
  email: string;
  car_type: string;
  pick_up_date: string;
  drop_off_date: string;
  location: string;
  additional_notes: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export default function BookingDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetchBooking();
  }, [params.id]);

  const fetchBooking = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/bookings/${params.id}`, {
        credentials: 'include', // Include cookies
      });
      const data = await response.json();

      if (data.success) {
        setBooking(data.booking);
      } else {
        toast.error('Failed to load booking');
        router.push('/admin/bookings');
      }
    } catch (error) {
      toast.error('An error occurred');
      router.push('/admin/bookings');
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (newStatus: string) => {
    if (!booking) return;

    setIsUpdating(true);
    try {
      const response = await fetch(`/api/bookings/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();

      if (data.success) {
        setBooking(data.booking);
        toast.success('Status updated successfully');
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-primary-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!booking) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/bookings"
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Booking Details</h1>
              <p className="text-gray-600">Booking ID: #{booking.id}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Status Section */}
          <div className="mb-8 pb-8 border-b">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Current Status</p>
                <span
                  className={`px-4 py-2 inline-flex text-sm font-semibold rounded-lg ${getStatusColor(
                    booking.status
                  )}`}
                >
                  {booking.status.toUpperCase()}
                </span>
              </div>
              <div className="flex gap-2">
                {booking.status !== 'confirmed' && (
                  <button
                    onClick={() => updateStatus('confirmed')}
                    disabled={isUpdating}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    Confirm
                  </button>
                )}
                {booking.status !== 'completed' && booking.status !== 'cancelled' && (
                  <button
                    onClick={() => updateStatus('completed')}
                    disabled={isUpdating}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    Mark Complete
                  </button>
                )}
                {booking.status !== 'cancelled' && (
                  <button
                    onClick={() => updateStatus('cancelled')}
                    disabled={isUpdating}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Full Name</p>
                <p className="text-lg font-medium">{booking.full_name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <p className="text-lg">{booking.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Phone Number</p>
                <p className="text-lg">{booking.phone_number}</p>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Car Type</p>
                <p className="text-lg font-medium">{booking.car_type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Location</p>
                <p className="text-lg">{booking.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Pick-up Date & Time</p>
                <p className="text-lg font-medium">
                  {format(new Date(booking.pick_up_date), 'MMMM dd, yyyy HH:mm')}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Drop-off Date & Time</p>
                <p className="text-lg font-medium">
                  {format(new Date(booking.drop_off_date), 'MMMM dd, yyyy HH:mm')}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          {booking.additional_notes && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Additional Notes</h2>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{booking.additional_notes}</p>
            </div>
          )}

          {/* Timestamps */}
          <div className="pt-8 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <p>Created: {format(new Date(booking.created_at), 'MMMM dd, yyyy HH:mm')}</p>
              </div>
              <div>
                <p>Last Updated: {format(new Date(booking.updated_at), 'MMMM dd, yyyy HH:mm')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

