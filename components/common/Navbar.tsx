"use client";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#f4faf6]">
      <div className="max-w-7xl mx-auto px-5 py-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.jpeg" alt="Logo" width={180} height={50} className="object-contain mix-blend-multiply" />
          </Link>
          <div className="flex gap-8 text-[15px] font-medium text-gray-800">
            <a href="tel:+917734996636" className="flex items-center gap-2"><Phone size={18} /> +91 77349 96636</a>
            <a href="mailto:info@dousoftit.com" className="flex items-center gap-2"><Mail size={18} /> info@dousoftit.com</a>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex justify-between items-start">
          <Image src="/logo.jpeg" alt="Logo" width={140} height={40} className="mix-blend-multiply" />
          <div className="flex flex-col items-end gap-1 text-[13px] text-gray-700 font-medium">
            <div className="flex items-center gap-1"><Phone size={14} /> +91 77349 96636</div>
            <div className="flex items-center gap-1"><Mail size={14} /> info@dousoftit.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}