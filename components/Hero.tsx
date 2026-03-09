"use client";

import Image from "next/image";
import { ArrowUpRight, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#F0F8F0] overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute right-60 top-0 w-[750px] h-[580px] pointer-events-none opacity-70">
        <Image
          src="/images/grid.png"
          alt="grid"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-[44px] pt-[80px] pb-[80px] grid lg:grid-cols-2 items-center gap-[60px] relative z-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-[22px] max-w-[650px]">

          {/* BADGE */}
          <div className="flex items-center gap-[10px] px-[12px] py-[10px] bg-[#EFFBF3] rounded-full w-fit">
            <Award className="w-[22px] h-[22px] text-[#017517]" />

            <p className="font-[var(--font-noto)] text-[16px] text-[#017517] font-medium">
              Trusted IT Partner
            </p>
          </div>

          {/* HEADING */}
          {/* <h1 className="font-[var(--font-poppins)] text-[28px] lg:text-[38px] leading-[40px] lg:leading-[52px] text-[#3A3A3A] font-semibold">
            Affordable & Reliable{" "}
            <span className="text-[#017517]">IT Solutions</span>{" "}
            for Growing Businesses
          </h1> */}

           <h1 className="font-lustria text-[28px] lg:text-[38px] leading-[40px] lg:leading-[52px] text-[#3A3A3A] font-semibold">
  Affordable & Reliable{" "}
  <span className="text-[#017517]">IT Solutions</span>{" "}
  for Growing Businesses
</h1>

          {/* SUB HEADING */}
          <h2 className="font-[var(--font-noto)] text-[18px] lg:text-[22px] font-semibold text-[#3A3A3A]">
            Build Smarter. Scale Faster. Spend Less.
          </h2>

          {/* DESCRIPTION */}
          <p className="font-[var(--font-noto)] text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#8A8A8A]">
            At Dousoft IT Solution, we deliver high-quality, affordable IT
            services that help startups, SMEs, and enterprises transform ideas
            into powerful digital solutions—without stretching budgets.
          </p>

          {/* BUTTON */}
          <button className="flex items-center gap-[10px] px-[18px] py-[11px] bg-[#017517] rounded-full w-fit shadow-md">
            <span className="font-[var(--font-noto)] text-[15px] lg:text-[18px] text-white">
              Book a Free Consultation
            </span>

            <ArrowUpRight className="w-[20px] h-[20px] text-white rotate-45" />
          </button>

        </div>

        {/* RIGHT HERO IMAGE */}
        <div className="relative w-full flex justify-end">

          <Image
            src="/hero/Hero.png"
            alt="Hero Image"
            width={620}
            height={990}
            priority
            className="object-contain relative z-20"
          />

        </div>

      </div>

    </section>
  );
}