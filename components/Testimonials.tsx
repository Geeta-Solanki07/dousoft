// components/TestimonialSection.tsx
"use client";

import Image from "next/image";

const TestimonialSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-12 px-6 py-24 bg-[#F0F8F0]">
      {/* Top Heading */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 w-[182px] h-[28px] bg-[#0B6F1E] rounded-full shadow-[1px_1px_2px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.1),inset_4px_4px_8px_rgba(0,0,0,0.45)] px-3">
          <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(48,94,232,0.5)]"></div>
          <span className="text-white font-konexy text-sm">TESTIMONIALS</span>
        </div>
        <h2 className="font-konexy text-3xl md:text-4xl text-black text-center">
          What Our Clients Say
        </h2>
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-[1350px]">
        {/* Left Image + Overlay + Quote */}
        <div className="relative w-full md:w-[55%] h-[400px] md:h-[610px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/girl.jpg"
            alt="Client Testimonial"
            fill
            className="object-cover"
          />

          {/* Overlay gradient + text */}
          <div className="absolute bottom-0 left-0 right-0 h-[108px] bg-gradient-to-t from-black/80 to-black/0 backdrop-blur-sm flex flex-col justify-center px-6 py-4 gap-1 z-10">
            <p className="text-white font-medium text-lg leading-[27px]">
              Sarah Chen, CTO @ Apex
            </p>
            <p className="text-white font-medium text-sm leading-[27px]">
              "Dousoft's vision drove our 40% growth in one year."
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="flex flex-col justify-center w-full md:w-[487.91px] h-[610px] gap-6">
          <div className="relative bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl p-6 flex flex-col gap-6 w-full h-full">
            {/* Header: Reviews + Verified */}
            <div className="flex justify-between items-center w-full">
              <h3 className="font-konexy text-[18.7px] leading-[22px] text-black">Reviews</h3>
              <div className="bg-[#EEF9F1] rounded-[6px] px-3 py-1">
                <span className="text-[#26A65B] font-bold text-[12px] leading-[15px]">✓ Verified</span>
              </div>
            </div>

            {/* Star Rating */}
            <div className="text-yellow-400 text-[16px] leading-[19px]">★★★★★</div>

            {/* Strong Heading */}
            <strong className="font-konexy text-[16px] leading-[24px] text-black">Exceptional Delivery</strong>

            {/* Full Quote */}
            <p className="text-[#3A3A3A] text-[14px] leading-[21px] flex-grow">
              Working with Dousoft has truly been a game-changer for our business. Their depth of knowledge and expertise in the industry is unparalleled. The team is not only professional but also proactive, ensuring that every project is executed flawlessly and on time. Their innovative solutions have helped us overcome complex challenges and achieve remarkable results. We are extremely satisfied with their dedication, support, and the tangible impact they bring to our operations.
            </p>

            {/* Client closing remark */}
            <p className="text-[#0B6F1E] font-medium text-[18px] leading-[27px]">
              "A true partnership that delivered beyond expectations."
            </p>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-2 h-2 rounded-full bg-black opacity-20"></div>
              <div className="w-2 h-2 rounded-full bg-black opacity-20"></div>
              <div className="w-2 h-2 rounded-full bg-black opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
