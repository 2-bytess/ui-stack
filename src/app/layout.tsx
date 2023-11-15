import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UI Stack",
    template: `%s - UI Stack`,
  },
  description: "A collection of beautifully developed mini-projects.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ui-stack.vercel.app/",
    title: "UI Stack",
    siteName: "UI Stack",
    images: [
      {
        url: "https://ui-stack.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "UI Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Stack",
    images: ["https://ui-stack.vercel.app/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          <Background />
          <div className="relative my-20 mx-auto max-w-4xl px-6">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
