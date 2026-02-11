// "use client";

// import Image from "next/image";
// import { testimonial, cta, footer } from "@/data/landingData";
// import { Mail, Globe, Phone, Check, MessageSquare } from "lucide-react";

// export default function TestimonialsCTA() {
//   return (
//     <section className="bg-[#F6FBF7] pt-20">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* ================= TESTIMONIAL SECTION ================= */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#1a8a3d] text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
//             <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
//             Testimonials
//           </div>
//           <h2 className="text-3xl md:text-[54px] font-[900] text-gray-900 mt-6 tracking-tighter leading-tight">
//             What Our Clients Say
//           </h2>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-10 items-stretch">
//           {/* CLIENT IMAGE - Positioned with Quote like SS */}
//           <div className="relative rounded-[2.5rem] overflow-hidden group min-h-[400px]">
//             <Image
//               src={testimonial.image}
//               alt="client"
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             {/* Overlay Info on Image */}
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 md:p-10">
//               <p className="text-white text-sm md:text-base font-bold">
//                 {testimonial.name}, {testimonial.designation}
//               </p>
//               <p className="text-white/90 text-lg md:text-xl font-extrabold mt-2 tracking-tight leading-snug italic">
//                 "{testimonial.quote}"
//               </p>
//             </div>
//           </div>

//           {/* REVIEW CARD - White Floating Box Look */}
//           <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-12 flex flex-col justify-center relative border border-gray-50">
//             <div className="flex justify-between items-start mb-8">
//                <h3 className="text-2xl font-[900] text-gray-900 tracking-tighter">Reviews</h3>
//                <span className="bg-green-50 text-[#1a8a3d] text-[10px] font-black px-3 py-1 rounded-md border border-green-100 flex items-center gap-1">
//                  <Check size={12} strokeWidth={4} /> VERIFIED
//                </span>
//             </div>

//             <div className="flex gap-1 text-yellow-400 mb-6">
//               {[...Array(5)].map((_, i) => (
//                 <span key={i} className="text-xl">★</span>
//               ))}
//             </div>

//             <h4 className="font-black text-xl md:text-2xl text-gray-900 mb-5 tracking-tighter">
//               Exceptional Delivery
//             </h4>

//             <p className="text-gray-500 text-sm md:text-base leading-[1.8] font-medium italic">
//               {testimonial.review}
//             </p>

//             <p className="text-[#1a8a3d] text-base md:text-lg mt-8 font-black tracking-tight border-t border-gray-50 pt-8">
//               “A true partnership that delivered beyond expectations.”
//             </p>
            
//             {/* Navigation Dots like in SS */}
//             <div className="flex gap-2 mt-8">
//                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
//                <div className="w-4 h-2 rounded-full bg-[#1a8a3d]"></div>
//             </div>
//           </div>
//         </div>

//         {/* ================= CTA SECTION ================= */}
//         <div className="relative mt-32 py-20 px-6 rounded-[3rem] overflow-hidden text-center">
//            {/* Background Decorations like in image */}
//            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-50/50 -z-10"></div>
           
//            <h2 className="text-4xl md:text-[60px] font-[900] text-gray-900 tracking-tighter leading-none mb-6">
//              {cta.title}
//            </h2>
//            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed">
//              {cta.subtitle}
//            </p>

//            <button className="mt-10 bg-white border-[3px] border-gray-900 text-gray-900 font-[900] px-10 py-5 rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 mx-auto uppercase tracking-tighter text-lg">
//              <MessageSquare size={24} fill="currentColor" />
//              {cta.buttonText}
//            </button>

//            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
//              {cta.points.map((item, i) => (
//                <div key={i} className="flex items-center gap-2 text-[#1a8a3d] font-black text-xs md:text-sm tracking-tighter uppercase">
//                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
//                    <Check size={12} strokeWidth={4} />
//                  </div>
//                  {item}
//                </div>
//              ))}
//            </div>
//         </div>
//       </div>

//       {/* ================= FOOTER ================= */}
//       <footer className="bg-[#2B2B2B] text-white mt-20 pt-20 pb-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 pb-16">
            
//             {/* LOGO */}
//             <div className="relative w-[180px] h-[60px]">
//               <Image
//                 src="/logo.png"
//                 alt="Dousoft Logo"
//                 fill
//                 className="object-contain brightness-0 invert" // Makes logo white for dark footer
//               />
//             </div>

//             {/* CONTACT INFO GRID */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//               <a href={`mailto:${footer.email}`} className="flex items-center gap-4 group">
//                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1a8a3d] transition-colors">
//                    <Mail size={18} className="text-[#1a8a3d] group-hover:text-white" />
//                 </div>
//                 <span className="text-sm font-bold tracking-tight">{footer.email}</span>
//               </a>

//               <a href={`https://${footer.website}`} target="_blank" className="flex items-center gap-4 group">
//                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1a8a3d] transition-colors">
//                    <Globe size={18} className="text-[#1a8a3d] group-hover:text-white" />
//                 </div>
//                 <span className="text-sm font-bold tracking-tight">{footer.website}</span>
//               </a>

//               <a href={`tel:${footer.phone}`} className="flex items-center gap-4 group">
//                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1a8a3d] transition-colors">
//                    <Phone size={18} className="text-[#1a8a3d] group-hover:text-white" />
//                 </div>
//                 <span className="text-sm font-bold tracking-tight">{footer.phone}</span>
//               </a>
//             </div>
//           </div>

//           {/* SOCIAL & COPYRIGHT */}
//           <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
//              <div className="flex gap-6">
//                 {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
//                   <a key={social} href="#" className="text-gray-400 hover:text-white capitalize text-sm font-bold transition-colors">
//                     {social}
//                   </a>
//                 ))}
//              </div>
//              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">
//                 {footer.copyright}
//              </p>
//           </div>
//         </div>
//       </footer>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { testimonial } from "@/data/landingData";
import { Check } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-[#F6FBF7] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a8a3d] text-white px-5 py-1.5 rounded-full text-[11px] font-[900] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            Testimonials
          </div>
          <h2 className="text-4xl md:text-[54px] font-[900] text-gray-900 mt-6 tracking-tighter leading-[1.1]">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT SIDE: CLIENT IMAGE WITH QUOTE OVERLAY */}
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[450px] shadow-2xl">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-white font-bold text-lg mb-1">
                {testimonial.name}, {testimonial.designation}
              </p>
              <p className="text-white text-2xl md:text-3xl font-[900] leading-tight tracking-tight italic">
                "{testimonial.quote}"
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: DETAILED REVIEW CARD */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-center shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-50 relative">
             <div className="flex justify-between items-start mb-8">
               <h3 className="text-2xl font-[900] tracking-tighter text-gray-900 uppercase">Reviews</h3>
               <span className="bg-green-50 text-[#1a8a3d] text-[10px] font-black px-3 py-1 rounded-md border border-green-100 flex items-center gap-1">
                 <Check size={12} strokeWidth={4} /> VERIFIED
               </span>
             </div>

             <div className="flex gap-1 text-yellow-400 mb-6 text-2xl">
               {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
             </div>

             <h4 className="font-[900] text-2xl text-gray-900 mb-5 tracking-tighter">Exceptional Delivery</h4>
             
             <p className="text-gray-500 text-lg leading-relaxed font-medium italic">
               "{testimonial.review}"
             </p>

             <p className="text-[#1a8a3d] text-xl mt-8 font-[900] tracking-tight border-t border-gray-100 pt-8">
               “A true partnership that delivered beyond expectations.”
             </p>

             {/* Navigation Indicator like in SS */}
             <div className="flex gap-2 mt-10">
               <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
               <div className="w-5 h-2.5 rounded-full bg-[#1a8a3d]"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}