import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
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
    <html lang="en" className={`${playfair.variable}`}>
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
      <body className="font-playfair">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
