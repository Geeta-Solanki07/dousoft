import type { Metadata } from "next";
import { Poppins, Noto_Sans, Lustria } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto",
});

const lustria = Lustria({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lustria",
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
      <body
        className={`${poppins.variable} ${notoSans.variable} ${lustria.variable}`}
      >
        {children}
      </body>
    </html>
  );
}