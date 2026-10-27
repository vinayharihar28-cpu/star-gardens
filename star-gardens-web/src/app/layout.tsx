import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stargardens.in"),
  title: "Star Gardens | Landscape Architecture & Design Studio, Bengaluru",
  description: "Living Landscapes. Designed to Endure. Landscape architecture, corporate biophilia, vertical gardens, plant rental, and 70 acres of nursery cultivation across South India.",
  keywords: [
    "Landscape Architecture Bengaluru",
    "Corporate Landscaping",
    "Vertical Gardens",
    "Plant Rental",
    "Plant AMC",
    "Office Biophilia",
    "Water Features"
  ],
  authors: [{ name: "Star Gardens Studio" }],
  openGraph: {
    title: "Star Gardens | Landscape Architecture & Design Studio",
    description: "Living landscapes designed, grown, and maintained by Star Gardens. 70 acres of production nurseries, 175+ enterprise clients.",
    images: [{ url: "/images/hero/hero-botanical-canopy.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${caveat.variable} min-h-full antialiased`}
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#121814] font-sans selection:bg-[#286746] selection:text-white">
        <SmoothScroll>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
