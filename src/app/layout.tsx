import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Food for the Soul — Arun Pandala",
  description:
    "A Cookbook By Arun Pandala. After Amma\u2019s passing in 2021, Arun turned to her kitchen and its memories to shape this book \u2014 a tribute to a life of selfless service, nurturing, and quiet strength. Every recipe carries the love and devotion of a mother who nourished everyone around her.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Food for the Soul",
    description:
      "A Cookbook By Arun Pandala. After Amma\u2019s passing in 2021, Arun turned to her kitchen and its memories to shape this book \u2014 a tribute to a life of selfless service, nurturing, and quiet strength. Every recipe carries the love and devotion of a mother who nourished everyone around her.",
    images: [
      {
        url: "/amma.png",
        width: 1200,
        height: 630,
        alt: "Amma — Arun Pandala\u2019s mother",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food for the Soul",
    description: "A Cookbook By Arun Pandala",
    images: ["/amma.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${ebGaramond.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
