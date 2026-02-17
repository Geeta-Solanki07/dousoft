// components/FooterOnly.tsx
"use client";

import Image from "next/image";
import { Mail, Globe, Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { footer } from "@/data/landingData";

export default function FooterOnly() {
  return (
    <footer className="relative bg-[#3A3A3A] text-white w-full">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Logo & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 pb-20 border-b border-white/10">
          <div className="relative w-[280px] h-[100px]">
            <Image src="/F_logo.png" alt="Dousoft IT Solution" fill className="object-contain" />
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto">
            <FooterContact icon={<Mail />} text={footer.email} sub="Mail us anytime" href={`mailto:${footer.email}`} />
            <FooterContact icon={<Globe />} text={footer.website} sub="Visit website" href={`https://${footer.website}`} />
            <FooterContact icon={<Phone />} text={footer.phone} sub="Call support" href={`tel:${footer.phone}`} />
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
          <div className="flex gap-10">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-[0.3em] text-center md:text-right">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterContact({ icon, text, sub, href }: { icon: any; text: string; sub: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-4 group">
      <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1a8a3d] transition-all duration-300">
        <span className="text-[#1a8a3d] group-hover:text-white">{icon}</span>
      </div>
      <div>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{sub}</p>
        <p className="text-sm font-bold tracking-tight text-gray-200 group-hover:text-white transition-colors">{text}</p>
      </div>
    </a>
  );
}




// "use client";

// import Image from "next/image";
// import { Mail, Globe, Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
// import { footer } from "@/data/landingData";

// export default function FooterOnly() {
//   return (
//     <footer className="relative bg-[#3A3A3A] text-white w-full">
//       {/* Grid Pattern Background */}
//       {/* <div className="absolute top-0 left-20 w-[274px] h-[198px] mix-blend-soft-light opacity-30 bg-grid-pattern"></div> */}

//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
//         {/* Logo & Contact */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-16 pb-20 border-b border-white/10">
//           <div className="relative w-[280px] h-[100px]">
//             <Image src="/F_logo.png" alt="Dousoft IT Solution" fill className="object-contain" />
//           </div>

//           {/* Contact Details */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto">
//             <FooterContact icon={<Mail />} text={footer.email} sub="Mail us anytime" href={`mailto:${footer.email}`} />
//             <FooterContact icon={<Globe />} text={footer.website} sub="Visit website" href={`https://${footer.website}`} />
//             <FooterContact icon={<Phone />} text={footer.phone} sub="Call support" href={`tel:${footer.phone}`} />
//           </div>
//         </div>

//         {/* Social & Copyright */}
//         <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
//           <div className="flex gap-10">
//             {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
//               <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
//                 <Icon size={20} />
//               </a>
//             ))}
//           </div>
//           <p className="text-[11px] text-gray-500 font-bold uppercase tracking-[0.3em] text-center md:text-right">
//             {footer.copyright}
//           </p>
//         </div>
//       </div>

//       {/* Grid Squares Background - You can adjust as per Figma */}
//       {/* <div className="absolute bottom-0 left-0 w-full h-[280px] grid grid-rows-5 grid-cols-21 gap-[0px] opacity-30">
//         {Array.from({ length: 105 }).map((_, i) => (
//           <div key={i} className="w-[49.53px] h-[49.53px] border border-[#EDE1F2]"></div>
//         ))}
//       </div> */}
//     </footer>
//   );
// }

// function FooterContact({ icon, text, sub, href }: { icon: any; text: string; sub: string; href: string }) {
//   return (
//     <a href={href} className="flex items-center gap-4 group">
//       <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1a8a3d] transition-all duration-300">
//         <span className="text-[#1a8a3d] group-hover:text-white">{icon}</span>
//       </div>
//       <div>
//         <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{sub}</p>
//         <p className="text-sm font-bold tracking-tight text-gray-200 group-hover:text-white transition-colors">{text}</p>
//       </div>
//     </a>
//   );
// }
