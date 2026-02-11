// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0a0a0a] text-gray-300 mt-20">
//       <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

//         {/* Company */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-4">
//             Dousoft IT Solution
//           </h3>

//           <p className="text-sm">
//             Affordable & Reliable IT solutions for startups,
//             SMEs and enterprise businesses.
//           </p>
//         </div>

//         {/* Links */}
//         <div>
//           <h4 className="text-white mb-4 font-semibold">Quick Links</h4>

//           <ul className="space-y-2">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="#services">Services</Link></li>
//             <li><Link href="#portfolio">Portfolio</Link></li>
//             <li><Link href="#contact">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h4 className="text-white mb-4 font-semibold">Services</h4>

//           <ul className="space-y-2">
//             <li>Web Development</li>
//             <li>Mobile App Development</li>
//             <li>UI/UX Designing</li>
//             <li>Digital Marketing</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="text-white mb-4 font-semibold">Contact</h4>

//           <p>📞 +91 77349 96636</p>
//           <p>📧 info@dousoft.com</p>
//         </div>
//       </div>

//       <div className="text-center border-t border-gray-700 py-6 text-sm">
//         © {new Date().getFullYear()} Dousoft IT Solution. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import Image from "next/image";
import { MessageSquare, Mail, Globe, Phone, Check, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { cta, footer } from "@/data/landingData";

export default function FooterSection() {
  return (
    <section className="bg-[#F6FBF7]">
      {/* ================= CTA BOX ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative overflow-hidden">
        <h2 className="text-4xl md:text-[56px] font-[900] text-gray-900 tracking-tighter leading-tight">
          {cta.title}
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg font-medium">
          {cta.subtitle}
        </p>

        {/* BRUTALIST BUTTON */}
        <button className="mt-10 bg-white border-[3px] border-gray-900 text-gray-900 font-black px-12 py-5 rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 mx-auto uppercase tracking-tighter text-xl">
          <MessageSquare size={24} fill="currentColor" />
          {cta.buttonText}
        </button>

        {/* POINTS */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {cta.points.map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-[#1a8a3d] font-black text-sm uppercase tracking-tighter">
              <Check size={18} strokeWidth={4} />
              {point}
            </div>
          ))}
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#333333] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pb-16 border-b border-white/10">
            
            {/* LOGO - Using F_logo.png */}
            <div className="relative w-[280px] h-[100px]">
              <Image
                src="/F_logo.png"
                alt="Dousoft Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* CONTACT INFO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <ContactItem icon={<Mail size={20} />} text={footer.email} link={`mailto:${footer.email}`} />
              <ContactItem icon={<Globe size={20} />} text={footer.website} link={`https://${footer.website}`} />
              <ContactItem icon={<Phone size={20} />} text={footer.phone} link={`tel:${footer.phone}`} />
            </div>
          </div>

          {/* SOCIAL & COPYRIGHT */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
            <div className="flex gap-6">
               <Facebook size={18} className="text-gray-400 hover:text-white cursor-pointer" />
               <Instagram size={18} className="text-gray-400 hover:text-white cursor-pointer" />
               <Twitter size={18} className="text-gray-400 hover:text-white cursor-pointer" />
               <Linkedin size={18} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em]">
              {footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

function ContactItem({ icon, text, link }: { icon: React.ReactNode, text: string, link: string }) {
  return (
    <a href={link} className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1a8a3d] transition-all">
        <span className="text-[#1a8a3d] group-hover:text-white transition-colors">{icon}</span>
      </div>
      <span className="text-sm font-bold tracking-tight text-gray-200 group-hover:text-white">
        {text}
      </span>
    </a>
  );
}