// components/CTASection.tsx
"use client";

import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { cta } from "@/data/landingData";

export default function CTASection() {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto px-6 py-24">
      {/* Center Text Layout */}
      <div className="flex flex-col items-center text-center gap-6 z-20">
        <h2 className="text-4xl md:text-[48px] font-[900] text-gray-900 tracking-tight leading-[1.1]">
          {cta.title}
        </h2>
        <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
          {cta.subtitle}
        </p>

        <button className="mt-6 bg-white border-[3px] border-gray-900 text-gray-900 font-[900] px-10 py-4 rounded-full shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 uppercase tracking-tighter text-lg active:scale-95">
          <MessageSquare size={24} fill="currentColor" />
          {cta.buttonText}
        </button>

        {/* Trust Points */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6">
          {cta.points.map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[#1a8a3d] font-[900] text-sm uppercase tracking-widest"
            >
              <div className="bg-green-100 p-1 rounded-full">✓</div>
              {point}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative flex flex-col items-center text-center w-[90%] mx-auto py-12 px-4 gap-6 bg-gradient-to-br from-[#F4FFF7] via-[#E9FAEE] to-[#CFEEDD] rounded-xl mt-12">
        <h2 className="font-konexy text-[26px] leading-[36px] text-gray-800">
          {cta.title}
        </h2>
        <p className="font-noto text-[18px] leading-[27px] text-gray-500">
          {cta.subtitle}
        </p>

        <button className="flex flex-row items-center justify-center gap-3 bg-[#F0F8F0] border-2 border-gray-800 shadow-[4px_4px_0px_0px_#3C3744] rounded-[35px] px-6 py-4 text-[26px] font-konexy text-gray-800 uppercase tracking-tight active:scale-95 transition-all">
          <MessageSquare className="w-8 h-8 transform -scale-x-100" />
          {cta.buttonText}
        </button>
      </div>
    </section>
  );
}




// "use client";

// import Image from "next/image";
// import { MessageSquare } from "lucide-react";
// import { cta } from "@/data/landingData";

// export default function CTASection() {
//   return (
//     <section className="relative w-full max-w-[1600px] mx-auto px-6 py-24">

//       {/* ================= LEFT IMAGE (DESKTOP) ================= */}
//       {/* <div className="hidden md:block absolute top-[193px] left-[-189px] w-[406.14px] h-[234.29px] rotate-[24.54deg] z-10">
//         <Image
//           src="/images/cta1.png"
//           alt="CTA Left"
//           width={406}
//           height={234}
//           className="object-contain"
//         />
//       </div> */}

//       {/* ================= RIGHT IMAGE (DESKTOP) ================= */}
//       {/* <div className="hidden md:block absolute top-[-15px] left-[1383px] w-[406.14px] h-[234.29px] rotate-[-151.73deg] z-10">
//         <Image
//           src="/images/cta2.png"
//           alt="CTA Right"
//           width={406}
//           height={234}
//           className="object-contain"
//         />
//       </div> */}

//       {/* ================= CENTER TEXT LAYOUT (DESKTOP) ================= */}
//       <div className="hidden md:flex absolute top-[39px] left-[467px] w-[665px] h-[261px] flex-col items-center text-center gap-6 z-20">
//         <h2 className="text-4xl md:text-[48px] font-[900] text-gray-900 tracking-tight leading-[1.1]">
//           {cta.title}
//         </h2>
//         <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
//           {cta.subtitle}
//         </p>

//         <button className="mt-6 bg-white border-[3px] border-gray-900 text-gray-900 font-[900] px-10 py-4 rounded-full shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 uppercase tracking-tighter text-lg active:scale-95">
//           <MessageSquare size={24} fill="currentColor" />
//           {cta.buttonText}
//         </button>

//         {/* Trust Points */}
//         <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6">
//           {cta.points.map((point, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-2 text-[#1a8a3d] font-[900] text-sm uppercase tracking-widest"
//             >
//               <div className="bg-green-100 p-1 rounded-full">✓</div>
//               {point}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= MOBILE LAYOUT ================= */}
//       <div className="md:hidden relative flex flex-col items-center text-center w-[90%] mx-auto py-12 px-4 gap-6 bg-gradient-to-br from-[#F4FFF7] via-[#E9FAEE] to-[#CFEEDD] rounded-xl">
//         <h2 className="font-konexy text-[26px] leading-[36px] text-gray-800">
//           {cta.title}
//         </h2>
//         <p className="font-noto text-[18px] leading-[27px] text-gray-500">
//           {cta.subtitle}
//         </p>

//         {/* Mobile CTA Button */}
//         <button className="flex flex-row items-center justify-center gap-3 bg-[#F0F8F0] border-2 border-gray-800 shadow-[4px_4px_0px_0px_#3C3744] rounded-[35px] px-6 py-4 text-[26px] font-konexy text-gray-800 uppercase tracking-tight active:scale-95 transition-all">
//           <MessageSquare className="w-8 h-8 transform -scale-x-100" />
//           {cta.buttonText}
//         </button>
//       </div>
//     </section>
//   );
// }
