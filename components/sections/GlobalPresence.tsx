"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { stats, globalPresence } from "@/data/landingData";

export default function GlobalPresence() {
  return (
    <section className="bg-[#F4FAF6] py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        
        {/* --- SECTION 1: STATS & IMAGE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          
          {/* LEFT: HEADING & MAIN IMAGE */}
          <div className="w-full">
            <h2 className="text-[20px] md:text-[28px] font-extrabold text-[#333] mb-6 tracking-tight leading-tight uppercase">
              {globalPresence.title}
            </h2>
            <div className="relative w-full aspect-[4/3] md:aspect-square max-w-[500px] rounded-2xl overflow-hidden shadow-lg border border-white">
              <Image
                src={globalPresence.image}
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: STATS BOXES (Mobile Stacked, Desktop Full Width Boxes) */}
          <div className="w-full space-y-2 md:space-y-4 pt-2">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-5 md:p-8 rounded-xl transition-all ${
                  index === 0 
                  ? "bg-[#DFF1E3] border border-green-200" 
                  : "bg-transparent border-b border-gray-200 rounded-none hover:bg-white/50"
                }`}
              >
                <h3 className="text-3xl md:text-[48px] font-extrabold text-[#333] tracking-tighter">
                  {item.number}
                </h3>
                <p className="text-[#666] font-bold text-[10px] md:text-xs uppercase tracking-widest text-right max-w-[120px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: GLOBAL PRESENCE (TEXT, FLAGS & FULL-WIDTH MAP) --- */}
        <div className="mt-20 md:mt-32">
          {/* Grid for Text and Flags */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* LEFT TEXT CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#DFF1E3] text-[#1a8a3d] px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-4 border border-green-200">
                <Award size={14} strokeWidth={3} />
                {globalPresence.subtitle}
              </div>

              <h3 className="text-2xl md:text-[36px] font-extrabold text-[#333] mb-4 tracking-tighter leading-tight uppercase">
                {globalPresence.countriesServed}
              </h3>

              <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-md">
                {globalPresence.description}
              </p>
            </div>

            {/* RIGHT FLAG LIST */}
            <div className="grid grid-cols-1 gap-4 md:mt-10">
              {globalPresence.countries.map((country) => (
                <div key={country.name} className="flex items-center gap-4 group">
                  <div className="relative w-10 h-6 overflow-hidden rounded-sm shadow-sm border border-gray-100">
                    <Image
                      src={country.flag}
                      alt={country.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[#333] font-bold text-sm md:text-lg tracking-tight uppercase group-hover:text-green-600 transition-colors">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FULL WIDTH WORLD MAP (Bottom) */}
          <div className="relative mt-12 md:mt-16 w-full h-[250px] md:h-[450px]">
            <Image
              src={globalPresence.worldMap}
              alt="Global Reach"
              fill
              className="object-contain md:object-cover opacity-90"
            />
            {/* INDIA MARKER PIN */}
            <div className="absolute left-[70%] top-[58%] md:left-[67.5%] md:top-[61%]">
              <div className="w-4 h-4 bg-green-600 rounded-full animate-ping absolute" />
              <div className="w-4 h-4 bg-green-700 rounded-full relative shadow-[0_0_15px_rgba(21,128,61,0.8)]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}