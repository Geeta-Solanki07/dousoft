export default function ServicesStrip() {
  const services = [
    "WEBSITE DESIGN & DEVELOPMENT",
    "MOBILE APP DEVELOPMENT",
    "DIGITAL MARKETING",
    "IT CONSULTING",
    "SOFTWARE DEVELOPMENT",
  ];

  return (
    <div className="bg-[#36BC38] py-4 overflow-hidden">

      <div className="animate-marquee whitespace-nowrap flex">

        {[1, 2].map((group) => (
          <div key={group} className="flex gap-12 px-6">
            {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-white text-[18px] md:text-[22px] font-[var(--font-poppins)]"
          >
            {/* star icon */}
            <span className="text-yellow-300 text-xl">✦</span>

            {service}
          </div>
        ))}
          </div>
        ))}

      </div>

    </div>
  );
}
