import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Young+Serif&family=Prompt:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
