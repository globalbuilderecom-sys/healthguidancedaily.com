import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "The Cellular Energy Discovery That's Rewriting the Rules on Aging After 40 | Health Guidance Daily",
  description:
    "New research into NAD+ decline is helping adults understand why they feel 'off' — and what a little-known molecule called NMN might do about it.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSerif.variable} ${dmSans.variable} ${montserrat.variable}`}
    >
      <body className="bg-[#FAF8F4] text-[#1A1A18] antialiased" style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}>
        {children}
      </body>
    </html>
  );
}
