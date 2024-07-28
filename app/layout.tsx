import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '../components/sidebar';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/partials/Footer';
import Script from 'next/script';

const kaisei = localFont({
  src: '../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Asadbek Karimov',
    template: '%s',
  },
  description: 'Software Engineer | Creator of Mylinx.cc ✨ NYC ',
  openGraph: {
    title: 'Asadbek Karimov',
    description: 'Developer, and creator.',
    url: 'https://asadk.dev',
    siteName: 'Asad Karimov',
    images: [
      {
        url: 'https://asadk.dev/og-bg.png',
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
       <head>
        <Script type="text/javascript">
          {` (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ne4floxof2"); `}
        </Script>

      </head>

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
