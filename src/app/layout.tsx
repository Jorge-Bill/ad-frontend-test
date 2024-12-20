import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

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
        <main className="mx-auto bg-white">
          <FadeIn delay={0}>
            <Header />
          </FadeIn>
          <FadeIn delay={0.4}>{children}</FadeIn>
          <FadeIn delay={0.2}>
            <Footer />
          </FadeIn>
        </main>
      </body>
    </html>
  );
}
