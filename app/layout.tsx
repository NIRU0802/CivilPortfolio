import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { MuiProvider } from '@/theme/MuiProvider';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ClientSideWrapper from '@/components/layout/ClientSideWrapper';
import PageBackground from '@/components/layout/PageBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nirajkathe.com'),
  title: {
    default: 'Niraj Kathe | Civil Engineer & Developer – Nashik',
    template: '%s | Niraj Kathe – Civil Engineer',
  },
  description:
    'Premium civil engineering, residential construction, and land development services in Nashik. 15+ years experience. Get a free consultation.',
  keywords: [
    'civil engineer nashik',
    'home builder nashik',
    'residential construction maharashtra',
    'land developer nashik',
    'structural engineer',
    'construction company nashik',
  ],
  authors: [{ name: 'Niraj Kathe' }],
  creator: 'Niraj Kathe',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.nirajkathe.com',
    siteName: 'Niraj Kathe Construction',
    title: 'Niraj Kathe | Civil Engineer & Developer – Nashik',
    description:
      'Premium civil engineering, residential & commercial construction, and land development in Nashik. Schedule a free consultation.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Niraj Kathe Construction' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niraj Kathe | Civil Engineer & Developer',
    description: 'Premium civil engineering and construction in Nashik.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} style={{ backgroundColor: '#050D1C' }}>
        <MuiProvider>
          <ClientSideWrapper>
            <PageBackground />
            <Navbar />
            <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
            <Footer />
          </ClientSideWrapper>
        </MuiProvider>
      </body>
    </html>
  );
}
