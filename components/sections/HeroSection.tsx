"use client";

import Image from "next/image";
import { Award, ArrowRight } from "lucide-react";
import { hero } from "@/data/landingData";

const HeroSection = () => {
  const services = [
    "WEBSITE DESIGN & DEVELOPMENT",
    "MOBILE APP DEVELOPMENT",
    "DIGITAL MARKETING",
    "IT CONSULTING",
    "SOFTWARE DEVELOPMENT",
  ];

  return (
    <>
      <section className="relative bg-[#f4faf6] overflow-hidden">
        {/* Grid Background - Reduced opacity to match SS */}
        <div className="absolute inset-0 bg-[linear-gradient(#d8e9dc_1px,transparent_1px),linear-gradient(to_right,#d8e9dc_1px,transparent_1px)] bg-[size:35px_35px] opacity-25"></div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-6 pt-4 md:pt-10 pb-12 md:pb-20">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            
            {/* LEFT CONTENT - Mobile: Order 1 (Top) | Desktop: Order 1 (Left) */}
            <div className="text-left z-20 order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 rounded-full border border-green-100 shadow-sm mb-4 md:mb-6">
                <Award size={16} className="text-green-600" />
                <span className="text-green-700 font-bold text-[10px] md:text-xs uppercase tracking-widest">
                  {hero.subtitle}
                </span>
              </div>

              {/* Heading - Exact Style and Line Height */}
              <h1 className="text-[34px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.1] text-[#333] tracking-tight">
                Affordable & Reliable <br />
                <span className="text-[#1a8a3d]">IT Solutions</span> <br />
                <span className="text-[#333]">for Growing Businesses</span>
              </h1>

              {/* Tagline */}
              <p className="mt-5 text-[#333] font-bold text-lg md:text-xl">
                {hero.tagline}
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-500 text-sm md:text-base max-w-lg leading-relaxed font-normal">
                At Dousoft IT Solution, we deliver high-quality, affordable IT
                services that help startups, SMEs, and enterprises transform ideas
                into powerful digital solutions—without stretching budgets.
              </p>

              {/* Button */}
              <div className="mt-8">
                <button className="bg-[#007a2d] text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-3 hover:bg-[#006425] transition-all shadow-lg hover:shadow-green-200/50">
                  Book a Free Consultation
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE - Mobile: Order 2 (Bottom) | Desktop: Order 2 (Right) */}
            <div className="relative order-2 flex justify-center items-center pt-4 md:pt-0">
               <div className="relative w-full max-w-[450px] md:max-w-[550px]">
                  <Image
                    src={hero.image} 
                    alt="Dousoft IT Solutions"
                    width={600}
                    height={500}
                    priority
                    className="object-contain z-10 relative drop-shadow-2xl"
                  />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* GREEN SERVICE STRIP (Marquee) */}
      <div className="bg-[#38b93d] py-4 md:py-5 overflow-hidden border-t border-white/20 marquee-container">
        <div className="animate-marquee whitespace-nowrap flex">
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center gap-8 md:gap-12 px-4 md:px-6">
              {services.map((service, index) => (
                <span key={index} className="text-white font-extrabold tracking-tight text-sm md:text-xl flex items-center gap-2 md:gap-3">
                  <span className="text-yellow-300 text-xl md:text-2xl">✦</span> {service}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;