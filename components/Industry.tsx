"use client";

import Image from "next/image";

export default function IndustriesAndProcess() {
  return (
    <section className="bg-[#F6FBF7] sm:bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= INDUSTRIES ================= */}
        <div className="mb-24">
          {/* Industries Title */}
          {/* <div className="text-center mb-8">
            <p className="text-sm text-gray-600">Industries We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
              Our Expertise
            </h2>
          </div> */}

          {/* INDUSTRIES IMAGE */}
          <div className="relative w-full h-[835px] sm:h-[500px] flex justify-center">
            <Image
              src="/images/industry.png" // first image
              alt="Industries"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* ================= PROCESS ================= */}
        <div
          className="mt-24 py-12 px-6"
          style={{
            background:
              "linear-gradient(107.47deg, #F4FFF7 1.03%, #E9FAEE 34.63%, #DFF4E6 68.23%, #CFEEDD 97.02%)",
          }}
        >
          <div className="mb-14 text-center">
            <p className="text-sm text-gray-600">Our Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
              How We Work
            </h2>
          </div>

          {/* PROCESS IMAGE */}
          <div className="relative w-full h-[535px] sm:h-[500px] flex justify-center">
            <Image
              src="/images/work.png" // second image
              alt="Our Process"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
