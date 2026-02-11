"use client";

import Image from "next/image";

export default function IndustriesAndProcess() {
  return (
    <section className="bg-[#F6FBF7] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= INDUSTRIES ================= */}

       

        {/* INDUSTRIES IMAGE */}
        <div className="relative w-full h-auto flex justify-center">
          <Image
            src="/industries.png"   // 👈 First image yaha lagao
            alt="Industries"
            width={1200}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* ================= PROCESS ================= */}

        <div className="mt-24">

          <div className="mb-14 ">
            <p className="text-sm text-gray-600">Our Process</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-1">
              How We Work
            </h2>
          </div>

          {/* PROCESS IMAGE */}
          <div className="relative w-full h-auto flex justify-center">
            <Image
              src="/process.png"   // 👈 Second image yaha lagao
              alt="Our Process"
              width={1200}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
