import Image from "next/image";

const statsData = [
  { value: "5+", label: "Years of Experience", highlight: true },
  { value: "50+", label: "Skilled IT professionals" },
  { value: "800+", label: "Projects executed" },
  { value: "150+", label: "Satisfied clients worldwide" },
];

export default function StatsSection() {
  return (
    <section className="w-full flex justify-center bg-white py-16">
      
      {/* Main Container */}
      <div
        className="
        bg-[#F0F8F0] p-[15px] gap-[10px] flex flex-col
        
        w-[408px] h-[1053px]   /* Mobile Figma */
        md:w-[1318px] md:h-[727px]   /* Desktop Figma */
        "
      >
        {/* Inner Layout */}
        <div
          className="
          flex flex-col gap-[16px]
          md:flex-row md:justify-between md:items-center md:gap-[132px]
          "
        >
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 w-full md:w-[558px]">
            
            <h2 className="text-[22px] leading-[32px] text-[#3A3A3A]">
              Fueling scalable growth with consistent results
            </h2>

            {/* Image */}
            <div className="
              relative overflow-hidden rounded-lg
              w-full h-[609px]
              md:w-[558px]
              shadow-[1px_1px_2px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.1),inset_4px_4px_8px_rgba(0,0,0,0.45)]
            ">
              <Image
                src="/images/state.jpg"
                alt="stats"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE STATS */}
          <div
            className="
            flex flex-col items-end gap-[26px]
            w-full md:w-[450px]
            "
          >
            {statsData.map((stat, index) => (
              <div
                key={index}
                className={`
                flex justify-between items-center
                w-full h-[58px] px-[10px]

                ${stat.highlight
                  ? "bg-gradient-to-r from-[#F4FFF7] via-[#E9FAEE] to-[#CFEEDD]"
                  : ""}
                `}
              >
                <span className="text-[26px] text-[#3A3A3A]">
                  {stat.value}
                </span>

                <span
                  className={`text-[18px] font-medium ${
                    stat.highlight
                      ? "text-[#3A3A3A]"
                      : "text-[#8A8A8A]"
                  }`}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
