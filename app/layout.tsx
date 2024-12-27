import './globals.css';
import type { Metadata } from 'next';
import { Luxurious_Roman } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";

const luxuriousRoman = Luxurious_Roman({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luxurious',
});

export const metadata: Metadata = {
  title: 'Evensia 5',
  description: 'The Legacy of Excellence',
  icons: {
    icon: '/e2.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${luxuriousRoman.variable}`}>
      <head>
        <link 
          rel="icon" 
          type="image/png" 
          href="/e2.png"
          sizes="32x32"
        />
        <link 
          rel="icon" 
          type="image/png" 
          href="/e2.png"
          sizes="16x16"
        />
      </head>
      <body className={`${luxuriousRoman.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
