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

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(#d8e9dc_1px,transparent_1px),linear-gradient(to_right,#d8e9dc_1px,transparent_1px)] bg-[size:35px_35px] opacity-25"></div>

        {/* MAIN CONTAINER */}
        <div className="relative max-w-7xl mx-auto px-5 md:px-6 pt-10 md:pt-16 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="z-20">

            {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#EFFBF3] rounded-full w-fit">
              <Award size={22} className="text-[#017517]" />

              <span className="font-medium text-[#3A3A3A] text-[14px] md:text-[18px]">
                Trusted IT Partner
              </span>
            </div>

            {/* Heading */}
            <div className="mt-5 space-y-3">

              <h1
                className="text-[#3A3A3A] text-[26px] leading-[36px] md:text-[32px] md:leading-[44px] lg:text-[42px] lg:leading-[52px]"
                style={{ fontFamily: "Konexy Personal Use" }}
              >
                Affordable & Reliable <span className="text-[#1a8a3d]">IT Solutions</span> for Growing Businesses
              </h1>

              <p
                className="text-[#3A3A3A] text-[18px] leading-[28px] md:text-[22px] md:leading-[32px]"
                style={{ fontFamily: "Konexy Personal Use" }}
              >
                Build Smarter. Scale Faster. Spend Less.
              </p>

              {/* Description */}
              <p
                className="text-[#8A8A8A] text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] max-w-[601px]"
                style={{ fontFamily: "Noto Sans" }}
              >
                At Dousoft IT Solution, we deliver high-quality, affordable IT
                services that help startups, SMEs, and enterprises transform ideas
                into powerful digital solutions—without stretching budgets.
              </p>
            </div>

            {/* CTA BUTTON */}
            <button className="mt-7 flex items-center gap-3 bg-[#017517] text-white rounded-full shadow-md px-6 py-3.5 hover:bg-[#015e13] transition">
              Book a Free Consultation
              <ArrowRight size={20} className="rotate-90" />
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">

            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[520px] md:h-[500px] lg:w-[650px] lg:h-[560px]">

              <Image
                src={hero.image}
                alt="Dousoft IT"
                fill
                priority
                className="object-contain drop-shadow-xl"
              />

            </div>

          </div>

        </div>
      </section>

      {/* SERVICE STRIP */}
      <div className="bg-[#38b93d] py-4 md:py-5 overflow-hidden">

        <div className="animate-marquee whitespace-nowrap flex">

          {[1, 2].map((group) => (
            <div key={group} className="flex items-center gap-10 px-6">

              {services.map((service, index) => (
                <span
                  key={index}
                  className="text-white font-bold flex items-center gap-3 text-sm md:text-xl"
                >
                  <span className="text-yellow-300 text-xl">✦</span>
                  {service}
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
