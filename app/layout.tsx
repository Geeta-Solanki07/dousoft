import type { Metadata } from "next";
import { Noto_Sans, Inter } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dousoft IT Solution",
  description: "Affordable & Reliable IT Solutions for Growing Businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
