import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'jodour.ma | جمعية جذور للتنمية البشرية - الموقع الرسمي (قيد التحديث)',
  description: 'الموقع الرسمي لجمعية جذور للتنمية البشرية (ARDH / jodour.ma). نعمل حالياً على تطوير وتحديث المنصة لإطلاق نسختها الجديدة بالكامل.',
  keywords: [
    'jodour',
    'jodour.ma',
    'جذور',
    'جمعية جذور للتنمية البشرية',
    'ARDH',
    'تنمية بشرية',
    'المغرب',
    'Morocco',
    'تأطير الشباب',
    'عمل جمعوي',
    'المبادرة الوطنية للتنمية البشرية'
  ],
  authors: [{ name: 'جمعية جذور للتنمية البشرية (ARDH)' }],
  metadataBase: new URL('https://jodour.ma'),
  openGraph: {
    title: 'jodour.ma | جمعية جذور للتنمية البشرية',
    description: 'الموقع الرسمي لجمعية جذور للتنمية البشرية - قيد الصيانة والتحديث لإطلاق المنصة الجديدة.',
    url: 'https://jodour.ma',
    siteName: 'جمعية جذور للتنمية البشرية',
    images: [
      {
        url: '/jodour-logo.jpg',
        width: 800,
        height: 800,
        alt: 'شعار جمعية جذور للتنمية البشرية - jodour.ma',
      },
    ],
    locale: 'ar_MA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'jodour.ma | جمعية جذور للتنمية البشرية',
    description: 'الموقع الرسمي لجمعية جذور للتنمية البشرية - قيد الصيانة والتحديث.',
    images: ['/jodour-logo.jpg'],
  },
  icons: {
    icon: '/jodour-logo.jpg',
    apple: '/jodour-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0d1a12" />
      </head>
      <body className="min-h-screen bg-[#0d1a12] text-[#f0f5f2] antialiased selection:bg-[#52b788] selection:text-[#081c15]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
