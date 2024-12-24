import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientInit from '@/components/ClientInit';

import { AppConfig } from '@/config/AppConfig';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
  keywords: AppConfig.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={AppConfig.locale}>
      <body className={inter.className}>
        <ClientInit />
        <main className="mx-auto bg-white">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
