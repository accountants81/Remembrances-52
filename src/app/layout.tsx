
import type {Metadata} from 'next';
import { Noto_Kufi_Arabic } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AppProviders from '@/components/providers/AppProviders';
import SiteHeader from '@/components/layout/SiteHeader';
import { DesktopSideNav } from '@/components/layout/DesktopSideNav';
import Footer from '@/components/layout/Footer';

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-kufi-arabic',
  display: 'swap',
});

const siteTitle = 'نَجَاتُكَ بِيَدِكَ - Garden of Remembrance';
const siteDescription = 'موقع إسلامي شامل للأذكار والأدعية اليومية والفوائد الإسلامية. نجاتك بيدك نحو حياة أكثر طمأنينة وقرباً من الله.';
// IMPORTANT: Replace 'https://your-actual-domain.com' with your site's deployed URL for Open Graph images to work correctly.
const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-actual-domain.com';


export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteBaseUrl),
  verification: {
    google: "erc3DhRH1Zx4lamgfNDwou_YZxbsSIYgVBByQy9YDZA",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/', // Relative to metadataBase
    siteName: 'نَجَاتُكَ بِيَدِكَ',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Standard Open Graph image size
        width: 1200,
        height: 630,
        alt: 'نَجَاتُكَ بِيَدِكَ - صورة تعريفية للموقع',
      },
    ],
    locale: 'ar_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteBaseUrl}/og-image.png`], // Example: if you host your own image at public/og-image.png
    // Using the placeholder for now, as hosting a specific image is beyond current scope.
    // Replace the above with: images: ['https://placehold.co/1200x630.png'], if you prefer the placeholder
  },
  // It's good practice to also add a general manifest for PWA capabilities later
  // manifest: '/manifest.json', 
  // And icons for favicons, etc.
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Enforcing dark theme globally via html class
    <html lang="ar" dir="rtl" className="dark">
      <body className={`${notoKufiArabic.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <AppProviders>
          <SiteHeader />
          <div className="flex flex-1 container mx-auto rtl:space-x-reverse">
            <DesktopSideNav />
            <main className="flex-1 py-6 px-0 md:px-4 lg:px-6 overflow-y-auto">
              {children}
            </main>
          </div>
          <Footer />
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
