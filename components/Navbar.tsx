"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#F0F8F0] w-full">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[44px] py-2 md:py-0">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Dousoft Logo"
              width={179}
              height={119}
              priority
              className="w-[96px] h-[64px] md:w-[179px] md:h-[119px] object-contain"
            />
          </Link>

          {/* CONTACT SECTION */}
          <div className="flex flex-col gap-[2px] md:flex-row md:items-center md:gap-[57px]">

            {/* PHONE */}
            <div className="flex items-center gap-[20px]">

              <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#F0F8F0] rounded-full">
                <Phone size={24} className="text-[#333333]" />
              </div>

              <span className="text-[#3A3A3A] text-[14px] md:text-[18px] font-medium leading-[150%]">
                +91 77349 96636
              </span>

            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-[20px]">

              <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#F0F8F0] rounded-full">
                <Mail size={24} className="text-[#333333]" />
              </div>

              <span className="text-[#3A3A3A] text-[14px] md:text-[18px] font-medium leading-[150%]">
                info@dousoftit.com
              </span>

            </div>

          </div>

        </div>
      </div>
    </header>
  );
}