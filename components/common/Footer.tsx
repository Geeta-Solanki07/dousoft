// // import Link from "next/link";

// // const Footer = () => {
// //   return (
// //     <footer className="bg-[#0a0a0a] text-gray-300 mt-20">
// //       <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

// //         {/* Company */}
// //         <div>
// //           <h3 className="text-xl font-semibold text-white mb-4">
// //             Dousoft IT Solution
// //           </h3>

// //           <p className="text-sm">
// //             Affordable & Reliable IT solutions for startups,
// //             SMEs and enterprise businesses.
// //           </p>
// //         </div>

// //         {/* Links */}
// //         <div>
// //           <h4 className="text-white mb-4 font-semibold">Quick Links</h4>

// //           <ul className="space-y-2">
// //             <li><Link href="/">Home</Link></li>
// //             <li><Link href="#services">Services</Link></li>
// //             <li><Link href="#portfolio">Portfolio</Link></li>
// //             <li><Link href="#contact">Contact</Link></li>
// //           </ul>
// //         </div>

// //         {/* Services */}
// //         <div>
// //           <h4 className="text-white mb-4 font-semibold">Services</h4>

// //           <ul className="space-y-2">
// //             <li>Web Development</li>
// //             <li>Mobile App Development</li>
// //             <li>UI/UX Designing</li>
// //             <li>Digital Marketing</li>
// //           </ul>
// //         </div>

// //         {/* Contact */}
// //         <div>
// //           <h4 className="text-white mb-4 font-semibold">Contact</h4>

// //           <p>📞 +91 77349 96636</p>
// //           <p>📧 info@dousoft.com</p>
// //         </div>
// //       </div>

// //       <div className="text-center border-t border-gray-700 py-6 text-sm">
// //         © {new Date().getFullYear()} Dousoft IT Solution. All Rights Reserved.
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// "use client";

// import Image from "next/image";
// import { MessageSquare, Mail, Globe, Phone, Check, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
// import { cta, footer } from "@/data/landingData";

// export default function FooterSection() {
//   return (
//     <section className="bg-[#F6FBF7]">
//       {/* ================= CTA BOX ================= */}
//       <div className="max-w-7xl mx-auto px-6 py-20 text-center relative overflow-hidden">
//         <h2 className="text-4xl md:text-[56px] font-[900] text-gray-900 tracking-tighter leading-tight">
//           {cta.title}
//         </h2>
//         <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg font-medium">
//           {cta.subtitle}
//         </p>

//         {/* BRUTALIST BUTTON */}
//         <button className="mt-10 bg-white border-[3px] border-gray-900 text-gray-900 font-black px-12 py-5 rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 mx-auto uppercase tracking-tighter text-xl">
//           <MessageSquare size={24} fill="currentColor" />
//           {cta.buttonText}
//         </button>

//         {/* POINTS */}
//         <div className="flex flex-wrap justify-center gap-8 mt-12">
//           {cta.points.map((point, i) => (
//             <div key={i} className="flex items-center gap-2 text-[#1a8a3d] font-black text-sm uppercase tracking-tighter">
//               <Check size={18} strokeWidth={4} />
//               {point}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= FOOTER ================= */}
//       <footer className="bg-[#333333] text-white pt-20 pb-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-12 pb-16 border-b border-white/10">
            
//             {/* LOGO - Using F_logo.png */}
//             <div className="relative w-[280px] h-[100px]">
//               <Image
//                 src="/F_logo.png"
//                 alt="Dousoft Logo"
//                 fill
//                 className="object-contain"
//               />
//             </div>

//             {/* CONTACT INFO */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//               <ContactItem icon={<Mail size={20} />} text={footer.email} link={`mailto:${footer.email}`} />
//               <ContactItem icon={<Globe size={20} />} text={footer.website} link={`https://${footer.website}`} />
//               <ContactItem icon={<Phone size={20} />} text={footer.phone} link={`tel:${footer.phone}`} />
//             </div>
//           </div>

//           {/* SOCIAL & COPYRIGHT */}
//           <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
//             <div className="flex gap-6">
//                <Facebook size={18} className="text-gray-400 hover:text-white cursor-pointer" />
//                <Instagram size={18} className="text-gray-400 hover:text-white cursor-pointer" />
//                <Twitter size={18} className="text-gray-400 hover:text-white cursor-pointer" />
//                <Linkedin size={18} className="text-gray-400 hover:text-white cursor-pointer" />
//             </div>
//             <p className="text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em]">
//               {footer.copyright}
//             </p>
//           </div>
//         </div>
//       </footer>
//     </section>
//   );
// }

// function ContactItem({ icon, text, link }: { icon: React.ReactNode, text: string, link: string }) {
//   return (
//     <a href={link} className="flex items-center gap-4 group">
//       <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1a8a3d] transition-all">
//         <span className="text-[#1a8a3d] group-hover:text-white transition-colors">{icon}</span>
//       </div>
//       <span className="text-sm font-bold tracking-tight text-gray-200 group-hover:text-white">
//         {text}
//       </span>
//     </a>
//   );
// }

"use client";

import Image from "next/image";
import { MessageSquare, Mail, Globe, Phone, Check, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { cta, footer } from "@/data/landingData";

export default function FooterSection() {
  return (
    <section className="bg-[#F6FBF7]">
      {/* ================= CTA SECTION (Ready to Start) ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative">
        {/* Subtle Background Shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent to-green-50/50 -z-10 rounded-[4rem]"></div>
        
        <h2 className="text-4xl md:text-[64px] font-[900] text-gray-900 tracking-tighter leading-[1.1] mb-6">
          {cta.title}
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
          {cta.subtitle}
        </p>

        {/* BRUTALIST SHADOW BUTTON */}
        <button className="mt-12 bg-white border-[3px] border-gray-900 text-gray-900 font-[900] px-12 py-5 rounded-full shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-4 mx-auto uppercase tracking-tighter text-xl active:scale-95">
          <MessageSquare size={24} fill="currentColor" />
          {cta.buttonText}
        </button>

        {/* TRUST POINTS */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-14 mt-16">
          {cta.points.map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-[#1a8a3d] font-[900] text-sm uppercase tracking-widest">
              <div className="bg-green-100 p-1 rounded-full">
                <Check size={16} strokeWidth={4} />
              </div>
              {point}
            </div>
          ))}
        </div>
      </div>

      {/* ================= FINAL FOOTER ================= */}
      <footer className="bg-[#2B2B2B] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logo & Info Grid */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 pb-20 border-b border-white/10">
            
            {/* Logo Placeholder - Pointing to your F_logo.png */}
            <div className="relative w-[280px] h-[100px]">
              <Image
                src="/F_logo.png"
                alt="Dousoft IT Solution"
                fill
                className="object-contain"
              />
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto">
              <FooterContact icon={<Mail />} text={footer.email} sub="Mail us anytime" href={`mailto:${footer.email}`} />
              <FooterContact icon={<Globe />} text={footer.website} sub="Visit website" href={`https://${footer.website}`} />
              <FooterContact icon={<Phone />} text={footer.phone} sub="Call support" href={`tel:${footer.phone}`} />
            </div>
          </div>

          {/* Social Links & Copyright */}
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
    </section>
  );
}

function FooterContact({ icon, text, sub, href }: { icon: any, text: string, sub: string, href: string }) {
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