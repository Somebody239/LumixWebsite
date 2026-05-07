import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../app/globals.css';
import ClientBody from './ClientBody';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeadPreload from './head-preload';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lumix Design - Web Design Studio',
  description: 'Lumix Design crafts clean, modern websites that help businesses stand out online. Professional web design at accessible pricing.',
  keywords: 'web design, website development, Lumix Design, modern websites, business websites, e-commerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <HeadPreload />
        <style>{`
          html {
            scroll-padding-top: 5rem;
            scroll-behavior: smooth;
          }
        `}</style>
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ClientBody>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ClientBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
