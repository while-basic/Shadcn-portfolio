import type { Metadata } from 'next';
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  Montserrat
} from 'next/font/google';
import '@/styles/globals.css';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';

import { metadata as meta } from '@/app/config';
import Loader from '@/app/loader';
import Providers from '@/app/providers';

import { createMetadata } from '@/lib/metadata';

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ['latin'] });

export const metadata = createMetadata({
  title: {
    absolute: meta.site.title,
    template: `%s | ${meta.site.title}`
  },
  description: meta.site.description,
  twitter: {
    title: meta.site.title,
    description: meta.site.description
  }
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={bricolage_grotesque.className}>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">
                <Loader />
                {children}
              </main>
            </div>
          </Providers>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
