import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abal.et'),
  title: {
    default: 'Abal - #1 Gym Management Software in Ethiopia',
    template: '%s | Abal Gym Management'
  },
  description: 'Ethiopia\'s leading gym management system. Automate memberships, track payments, manage check-ins, and grow your fitness center with Abal.',
  keywords: [
    'gym management system ethiopia',
    'gym management software',
    'fitness center management software',
    'gym membership software',
    'best gym software ethiopia',
    'gym access control system',
    'ethiopian gym software',
    'fitness club management'
  ],
  authors: [{ name: 'Abal Team' }],
  creator: 'Abal',
  publisher: 'Wovera Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Abal - #1 Gym Management Software in Ethiopia',
    description: 'Ethiopia\'s leading gym management system. Automate memberships, track payments, manage check-ins, and grow your fitness center with Abal.',
    url: 'https://abal.et',
    siteName: 'Abal Gym Management',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Needs to be added to public folder manually later
        width: 1200,
        height: 630,
        alt: 'Abal Gym Management Software Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abal - #1 Gym Management Software in Ethiopia',
    description: 'Automate your gym operations, track revenue, and manage members with Ethiopia\'s most advanced gym software.',
    images: ['/og-image.jpg'],
    creator: '@abal_et', // Placeholder handle
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
  alternates: {
    canonical: 'https://abal.et',
  },
  verification: {
    google: 'google-site-verification-placeholder', // Needs to be updated
  },
  appleWebApp: {
    title: 'Abal',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} antialiased`}
      >
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
