import type {Metadata} from 'next';
import { Noto_Kufi_Arabic } from 'next/font/google'; // Using Noto Kufi Arabic for better Arabic script rendering
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AppProviders from '@/components/providers/AppProviders';

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-kufi-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'نَجَاتُكَ بِيَدِكَ - رفيقك اليومي للذكر والدعاء', // Updated Site Name
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
    <html lang="ar" dir="rtl">
      <body className={`${notoKufiArabic.variable} font-sans antialiased`}>
        <AppProviders>
          {children}
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
