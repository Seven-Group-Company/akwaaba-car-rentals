import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akwaaba Car Rental - Premium Car Rental Services',
  description: 'Akwaaba Car Rental offers reliable and affordable car rental services. Book your vehicle today and experience comfort and convenience.',
  keywords: 'car rental, vehicle rental, car hire, Akwaaba, Ghana car rental',
  authors: [{ name: 'Akwaaba Car Rental' }],
  openGraph: {
    title: 'Akwaaba Car Rental - Premium Car Rental Services',
    description: 'Reliable and affordable car rental services',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

