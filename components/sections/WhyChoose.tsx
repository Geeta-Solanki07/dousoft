"use client";

import Image from "next/image";
import { features, services } from "@/data/landingData";
import { 
  Eye, Search, LineChart, Edit3, 
  Camera, Star, FileText, ChevronRight 
} from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="bg-[#F4FAF6] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        
        {/* TOP SECTION: ICONS & TEXT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT: ICON GRID WITH SEMI-CIRCLE */}
          <div className="relative flex justify-center md:justify-start order-1 md:order-1">
            <div className="relative bg-[#DFF1E3] bg-grid-subtle rounded-r-[180px] rounded-l-[40px] p-10 md:p-16 border-r-2 border-green-500/30">
              <div className="grid grid-cols-4 gap-4 md:gap-6 relative z-10">
                <IconBox Icon={Eye} />
                <IconBox Icon={Search} />
                <IconBox Icon={LineChart} />
                <IconBox Icon={Edit3} />
                <IconBox Icon={Camera} />
                <IconBox Icon={Star} />
                <IconBox Icon={FileText} />
              </div>
            </div>
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="text-left order-2 md:order-2">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#333] leading-tight tracking-tight">
              Why Choose <span className="text-[#1a8a3d]">Dousoft IT Solution?</span>
            </h2>
            <p className="text-gray-500 font-bold text-xs md:text-sm mt-2 uppercase tracking-wide">
              Top-Quality Services at Affordable Pricing
            </p>
            <p className="text-[#444] mt-6 leading-relaxed font-medium text-sm md:text-base max-w-lg">
              We believe world-class technology should be accessible to every business. 
              That's why we combine cost-effective pricing with enterprise-grade execution.
            </p>
          </div>
        </div>

        {/* FEATURES GRID (4 CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mt-12 md:mt-16">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-gradient-to-r from-[#DFF1E3] to-[#F1F9F3] p-4 md:p-5 rounded-lg flex items-center gap-4 shadow-sm border border-white/50"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-md border-2 border-white">
                <div className="text-white">
                  {/* Mapping dynamic icons based on index for variety like SS */}
                  {i === 0 && <LineChart size={24} />}
                  {i === 1 && <Search size={24} />}
                  {i === 2 && <Star size={24} />}
                  {i === 3 && <LineChart size={24} />}
                </div>
              </div>
              <span className="text-[#333] font-bold text-base md:text-xl tracking-tight leading-tight">
                {feature.title}
              </span>
            </div>
          ))}
        </div>

        {/* SERVICES LIST SECTION */}
        <div className="mt-16 md:mt-24 space-y-2">
          {services.map((service, i) => (
            <div key={i} className="group">
              <div className="flex items-center justify-between py-6 md:py-8 transition-all">
                <div className="flex items-center gap-6 md:gap-16 w-full">
                  {/* Service Image Placeholder like SS */}
                  <div className="relative w-32 h-20 md:w-56 md:h-32 flex-shrink-0 bg-[#E8F3EB] rounded-[40px] overflow-hidden border border-green-100 shadow-inner flex items-center justify-center p-2">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all opacity-80"
                    />
                  </div>
                  
                  <h3 className="text-lg md:text-[28px] font-extrabold text-[#333] tracking-tighter uppercase">
                    {service.title}
                  </h3>
                </div>
                
                {/* Optional Arrow like a professional company site */}
                <ChevronRight className="text-gray-300 hidden md:block" />
              </div>
              <div className="h-[1px] bg-gray-300 w-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-component for Icon Grid
function IconBox({ Icon }: { Icon: any }) {
  return (
    <div className="w-12 h-12 md:w-14 md:h-14 bg-white border border-green-300 rounded-xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer">
      <Icon className="text-green-600" size={24} strokeWidth={1.5} />
    </div>
  );
}