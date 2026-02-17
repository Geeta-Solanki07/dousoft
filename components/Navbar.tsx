"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#F0F8F0]">
      <div className="max-w-[1352px] mx-auto px-4 md:px-8 py-2 md:py-3">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Dousoft Logo"
              width={179}
              height={119}
              priority
              className="w-[96px] md:w-[179px] h-auto object-contain"
            />
          </Link>

          {/* CONTACT INFO */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-10">

            {/* PHONE */}
            <div className="flex items-center gap-2 md:gap-4">

              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F0F8F0]">
                <Phone className="text-[#3A3A3A]" size={18} />
              </div>

              <span className="text-[#3A3A3A] text-[14px] md:text-[18px] font-medium">
                +91 77349 96636
              </span>

            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-2 md:gap-4">

              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F0F8F0]">
                <Mail className="text-[#3A3A3A]" size={18} />
              </div>

              <span className="text-[#3A3A3A] text-[14px] md:text-[18px] font-medium">
                info@dousoftit.com
              </span>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}
