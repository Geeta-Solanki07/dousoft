"use client";

import { Search, Camera, Edit, Eye, Activity, Star, FileText } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="relative w-full py-24 overflow-hidden">

      {/* BG SHAPE */}
      <div className="absolute left-[360px] top-[80px] w-[590px] h-[260px] bg-[#E7F2EA] rounded-r-[200px] z-0">
        <div
          className="absolute inset-0 opacity-40
          bg-[linear-gradient(#d9e6dc_1px,transparent_1px),linear-gradient(90deg,#d9e6dc_1px,transparent_1px)]
          bg-[size:40px_40px]"
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 relative z-10">

        {/* ICON GRID */}
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-6">

            <IconBox><Eye size={22} /></IconBox>
            <IconBox><Search size={22} /></IconBox>
            <IconBox><Activity size={22} /></IconBox>
            <IconBox><Edit size={22} /></IconBox>

            <IconBox><Camera size={22} /></IconBox>
            <IconBox><Star size={22} /></IconBox>
            <IconBox><FileText size={22} /></IconBox>

          </div>
        </div>

        {/* TEXT */}
        <div className="max-w-[600px] flex flex-col gap-4">

          <h2 className="font-lustria text-[32px] leading-[44px] text-[#3A3A3A]">
            Why Choose <span className="text-[#1a8a3d]">Dousoft IT Solution?</span>
          </h2>

          <p className="text-[16px] uppercase text-[#3A3A3A]">
            Top-Quality Services at Affordable Pricing
          </p>

          <p className="text-[18px] leading-[30px] text-gray-600">
            We believe world-class technology should be accessible to every
            business. That’s why we combine cost-effective pricing with
            enterprise-grade execution.
          </p>

        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 gap-10 px-6">

        <FeatureCard
          icon="$"
          text="Affordable & transparent pricing"
        />

        <FeatureCard
          icon="🌐"
          text="Experienced global IT professionals"
        />

        <FeatureCard
          icon="🛡️"
          text="Proven delivery across industries"
        />

        <FeatureCard
          icon="📈"
          text="Scalable solutions for long-term growth"
        />

      </div>

    </section>
  );
}


/* ICON BOX */

function IconBox({ children }: any) {
  return (
    <div
      className="w-[64px] h-[64px] flex items-center justify-center
      bg-[#F0F8F0]
      border border-[#615666]
      rounded-[14px]
      shadow-[4px_4px_0px_#017517]"
    >
      {children}
    </div>
  );
}


/* FEATURE CARD */

function FeatureCard({ icon, text }: any) {
  return (
    <div
      className="
      flex items-center gap-7 p-[10px]
      w-full max-w-[611px] h-[108px]
      rounded-[16px]
      bg-[linear-gradient(107deg,#F4FFF7_1%,#E9FAEE_34%,#DFF4E6_68%,#CFEEDD_97%)]
      shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),6px_6px_12px_rgba(0,0,0,0.1)]
      "
    >

      {/* ICON */}
      <div className="w-[64px] h-[64px] flex items-center justify-center rounded-full bg-white text-[22px]">
        {icon}
      </div>

      {/* TEXT */}
      <h3 className="font-[Konexy] text-[32px] leading-[44px] text-[#3A3A3A]">
        {text}
      </h3>

    </div>
  );
}