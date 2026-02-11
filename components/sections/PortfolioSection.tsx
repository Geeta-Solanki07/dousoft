"use client";

import Image from "next/image";
import { portfolios } from "@/data/landingData";

export default function PortfolioSection() {
  return (
    <section className="bg-[#F6FBF7] py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER & GRID CONTAINER ================= */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Isme Header aur pehle 3 cards hain */}
          <div className="flex flex-col"> 
            {/* Header Section */}
            <div className="mb-10 md:mb-16">
              <p className="text-[#22C55E] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                Portfolio
              </p>
              <h2 className="text-3xl md:text-[54px] font-black text-gray-900 leading-tight tracking-tighter mt-1">
                Our Work
              </h2>
              {/* Paragraph jiske level par Right Side shuru hogi */}
              <p className="text-gray-500 mt-5 max-w-sm text-sm md:text-base leading-relaxed">
                Take a look at some of the online marketing results we have achieved
                for our clients.
              </p>
            </div>

            {/* Left Column Cards: Inhe thoda margin diya hai staggered effect ke liye */}
            <div className="space-y-10 md:space-y-16">
              <PortfolioCard {...portfolios[0]} />
              <PortfolioCard {...portfolios[2]} />
              <PortfolioCard {...portfolios[4]} />
            </div>
          </div>

          {/* RIGHT SIDE: Ye ab paragraph ke level se ya uske thoda niche shuru hoga */}
          {/* md:mt-[220px] ya similar value header ki height ke hisaab se adjust ki gayi hai */}
          <div className="space-y-10 md:space-y-16 md:mt-[240px] lg:mt-[260px]">
            <PortfolioCard {...portfolios[1]} />
            <PortfolioCard {...portfolios[3]} />

            {/* CTA CARD */}
            <div className="bg-[#22C55E] rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl min-h-[420px] flex flex-col justify-center relative group">
              <div className="relative z-10">
                <h3 className="text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight">
                  Ready to Start Your Project?
                </h3>
                <p className="mt-5 text-green-50 text-sm md:text-lg opacity-90 font-medium">
                  Let’s discuss how we can turn your ideas into reality—quickly
                  and affordably.
                </p>
                <button className="mt-10 bg-white text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-3 w-fit">
                  <span className="text-xl">💬</span> Let’s Get Started
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE CARD COMPONENT ================= */

function PortfolioCard({ title, image, category, metrics }: any) {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-50">
      <div className="relative w-full aspect-[1.35/1] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-1000 ease-in-out"
        />
      </div>

      <div className="p-8 md:p-10">
        {category && (
          <div className="flex flex-wrap gap-2 mb-5">
            {category.map((tag: string, index: number) => (
              <span
                key={index}
                className="text-[9px] md:text-[10px] font-black text-[#1a8a3d] bg-[#E8F5E9] px-3 py-1.5 rounded-full uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-extrabold text-xl md:text-[26px] text-gray-900 leading-[1.2] tracking-tight group-hover:text-[#22C55E] transition-colors">
          {title}
        </h3>

        {metrics && (
          <div className="flex gap-12 mt-8 border-t border-gray-50 pt-8">
            {metrics.map((metric: any, index: number) => (
              <div key={index}>
                <p className="text-[#22C55E] font-[900] text-2xl md:text-4xl tracking-tighter">
                  {metric.value}
                </p>
                <p className="text-[10px] md:text-[11px] text-gray-400 font-bold uppercase tracking-[0.1em] mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}