
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

export const metadata: Metadata = {
  title: 'نَجَاتُكَ بِيَدِكَ - Garden of Remembrance',
  description: 'موقع إسلامي شامل للأذكار والأدعية اليومية والفوائد الإسلامية. نجاتك بيدك نحو حياة أكثر طمأنينة وقرباً من الله.',
  verification: {
    google: "erc3DhRH1Zx4lamgfNDwou_YZxbsSIYgVBByQy9YDZA",
  },
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
