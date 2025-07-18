import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import NavbarMobile from "@/components/navbarMobile";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import TranslateFloatButton from "@/components/translateFloatButton";
import Footer from "@/components/footer";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <body
          className={`${spaceGrotesk.className} antialiased bg-dark-background`}
        >
          <Toaster
            position="top-right"
            toastOptions={{
              success: {
                style: {
                  background: "var(--color-light-boxes)",
                  color: "var(--color-text-secondary)",
                },
              },
              error: {
                style: {
                  background: "red",
                  color: "#FFF",
                },
              },
            }}
          />

          <main className="w-full h-screen flex flex-col sm:mt-[120px]">
            <div className="hidden sm:block">
              <Header />
            </div>

            <div
              className="
    flex-1
    overflow-y-auto sm:overflow-visible
    scroll-smooth sm:scroll-auto
    [scrollbar-width:none] [-ms-overflow-style:none]
  "
            >
              {children}
            </div>

            <div className="sm:hidden">
              <TranslateFloatButton />
            </div>

            <div className="block sm:hidden">
              <NavbarMobile />
            </div>

            <div className="hidden sm:block">
              <Footer />
            </div>
          </main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
