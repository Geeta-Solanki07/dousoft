"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { globalPresence } from "@/data/landingData";

export default function GlobalPresence() {
  return (
    <section className="w-full bg-[#F0F8F0] flex justify-center py-16 md:py-24">

      {/* ===== FIGMA FRAME CONTAINER ===== */}
      <div className="w-full max-w-[1318px] min-h-[729px] px-5 flex flex-col justify-between">

        {/* ===== TOP CONTENT ===== */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT TEXT */}
          <div className="flex flex-col gap-5 max-w-md">

            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-gradient-to-r from-[#F4FFF7] via-[#E9FAEE] to-[#CFEEDD]
              shadow-[1px_1px_2px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.1),inset_4px_4px_8px_rgba(0,0,0,0.45)]">

              <Award size={18} className="text-[#0B6F1E]" />

              <span className="text-[#0B6F1E] font-semibold text-sm md:text-base">
                Global Presence
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-[Konexy] text-[20px] md:text-[26px] text-[#3A3A3A]">
              We Serve 5+ Countries
            </h2>

            {/* Description */}
            <p className="text-[#3A3A3A] text-sm md:text-lg font-medium">
              Technology delivered globally, at speed
            </p>
          </div>

          {/* RIGHT COUNTRY LIST */}
          <div className="flex flex-col gap-4">

            {globalPresence.countries.map((country, i) => (
              <div key={i} className="flex items-center gap-4">

                <div className="relative w-[60px] h-[32px] rounded-sm overflow-hidden border">
                  <Image
                    src={country.flag}
                    alt={country.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="font-[Konexy] text-[18px] md:text-[22px] text-[#3A3A3A]">
                  {country.name}
                </span>

              </div>
            ))}
          </div>

        </div>

        {/* ===== WORLD MAP ===== */}
        <div className="relative w-full h-[200px] md:h-[370px] mt-14 md:mt-20">

          <Image
            src={globalPresence.worldMap}
            alt="world map"
            fill
            className="object-contain"
          />

          {/* INDIA PIN */}
          <div className="absolute left-[69%] top-[55%]">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-ping absolute"></div>
            <div className="w-3 h-3 bg-green-700 rounded-full relative"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
