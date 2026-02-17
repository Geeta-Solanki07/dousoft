"use client";

import Image from "next/image";
import { features, services } from "@/data/landingData";
import {
  Eye,
  Search,
  LineChart,
  Edit3,
  Camera,
  Star,
  FileText,
} from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="bg-gradient-to-br from-[#F4FFF7] via-[#E9FAEE] to-[#CFEEDD] py-16 md:py-24 relative overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-[#EDE1F2]" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* TOP */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SEMI CIRCLE */}
          <div className="relative flex justify-center md:justify-start">

            <div
              className="
              relative
              w-[320px] h-[180px]
              md:w-[678px] md:h-[300px]
              bg-gradient-to-r from-[#F4FFF7] via-[#E9FAEE] to-[#CFEEDD]
              border-l-[5px] border-[#2DBE60]
              rounded-l-[150px]
              scale-x-[-1]
              "
            >

              {/* ICON AREA */}
              <div
                className="
                absolute
                w-[200px] h-[120px]
                md:w-[376px] md:h-[188px]
                left-[60px] top-[30px]
                md:left-[173px] md:top-[56px]
                "
              >
                <IconBox Icon={Eye} left={0} top={0} />
                <IconBox Icon={Search} left={80} top={0} />
                <IconBox Icon={LineChart} left={160} top={0} />
                <IconBox Icon={Edit3} left={240} top={0} />

                <IconBox Icon={Camera} left={0} top={70} />
                <IconBox Icon={Star} left={80} top={70} />
                <IconBox Icon={FileText} left={160} top={70} />
              </div>

            </div>

          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col gap-4 max-w-[615px]">

            <h2 className="text-[24px] md:text-[32px] leading-[36px] md:leading-[44px] text-[#3A3A3A]">
              Why Choose <span className="text-[#1a8a3d]">Dousoft IT Solution?</span>
            </h2>

            <p className="uppercase text-[14px] md:text-[16px]">
              Top-Quality Services at Affordable Pricing
            </p>

            <p className="text-[16px] md:text-[22px] leading-[26px] md:leading-[32px]">
              We believe world-class technology should be accessible to every
              business. That’s why we combine cost-effective pricing with
              enterprise-grade execution.
            </p>

          </div>

        </div>

        {/* FEATURES */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-8">

          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-5 p-4 bg-gradient-to-r from-[#F4FFF7] via-[#E9FAEE] to-[#CFEEDD]"
            >

              <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full overflow-hidden">
                <Image
                  src={`/images/i${i + 1}.png`}
                  alt={feature.title}
                  width={64}
                  height={64}
                />
              </div>

              <p className="text-[20px] md:text-[32px] text-[#3A3A3A]">
                {feature.title}
              </p>

            </div>
          ))}

        </div>

        {/* SERVICES */}
        <div className="max-w-[1150px] mx-auto flex flex-col gap-8 mt-20">

          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between md:items-center border-b border-black pb-6"
            >

              <div className="relative w-full md:w-[377px] h-[140px] rounded-full overflow-hidden">
                <Image
                  src={`/images/f${i + 1}.png`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-[20px] md:text-[32px] text-[#3A3A3A] md:w-[565px]">
                {service.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

/* ICON BOX */
function IconBox({
  Icon,
  left,
  top,
}: {
  Icon: any;
  left: number;
  top: number;
}) {
  return (
    <div
      className="
      absolute
      w-12 h-12 md:w-16 md:h-16
      bg-[#F0F8F0]
      border-2 border-[#615666]
      rounded-xl
      flex items-center justify-center
      shadow-[4px_4px_0px_#017517]
      "
      style={{ left, top }}
    >
      <Icon className="text-[#615666]" size={20} strokeWidth={3} />
    </div>
  );
}
