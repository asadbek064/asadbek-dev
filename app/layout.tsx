import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '../components/sidebar';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/partials/Footer';

const kaisei = localFont({
  src: '../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Asad Karimov',
    template: '%s',
  },
  description: 'Developer and creator.',
  openGraph: {
    title: 'Asadbek Karimov',
    description: 'Developer, and creator.',
    url: 'https://asadbek.dev',
    siteName: 'Asad Karimov',
    images: [
      {
        url: 'https://asadbek.dev/og-bg.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Asad Karimov',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        kaisei.variable
      )}
    >
      <body className="antialiased max-w-3xl mb-20 flex flex-col mx-4 mt-8  lg:mt-32 md:mx-auto lg:mx-auto">
          <Sidebar />
        <main className="flex-auto min-w-0 mt-12 md:mt-12 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>

    
  );
}
