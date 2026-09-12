import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Alex_Brush, Amiri } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-arabic",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFF9FB",
};

export const metadata: Metadata = {
  title: "Wedding Invitation | S. Mohamed Dil Nawaz & A. Sharmila Begum",
  description:
    "With the blessings of Allah (SWT), cordially inviting you to honour us with your gracious presence at the Nikkah & Valima celebration of S. Mohamed Dil Nawaz & A. Sharmila Begum on Sunday, 18 October 2026.",
  keywords: [
    "Wedding",
    "Nikkah",
    "Valima",
    "Mohamed Dil Nawaz",
    "Sharmila Begum",
    "Wedding Invitation",
    "Islamic Wedding",
  ],
  openGraph: {
    title: "Wedding Invitation | S. Mohamed Dil Nawaz & A. Sharmila Begum",
    description:
      "Cordially inviting you to honour us with your gracious presence at the Nikkah & Valima celebration of S. Mohamed Dil Nawaz & A. Sharmila Begum on Sunday, 18 October 2026.",
    type: "website",
  },
};

import { MobileDesktopFix } from "@/components/MobileDesktopFix";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${alexBrush.variable} ${amiri.variable} scroll-smooth`}
    >
      <body className="min-h-screen min-h-[100dvh] w-full bg-[#FFF9FB] text-[#2A1621] antialiased selection:bg-[#D45B7D] selection:text-white overflow-x-hidden relative">
        <MobileDesktopFix>
          {/* LAYER 3 — SCROLLING CONTENT */}
          <main className="relative z-10 w-full min-h-[100dvh]">
            {children}
          </main>
        </MobileDesktopFix>
      </body>
    </html>
  );
}
