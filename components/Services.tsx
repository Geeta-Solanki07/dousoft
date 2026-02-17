export default function ServicesStrip() {
  const services = [
    "WEBSITE DESIGN & DEVELOPMENT",
    "MOBILE APP DEVELOPMENT",
    "DIGITAL MARKETING",
    "IT CONSULTING",
    "SOFTWARE DEVELOPMENT",
  ];

  return (
    <div className="bg-[#38b93d] py-4 overflow-hidden">

      <div className="animate-marquee whitespace-nowrap flex">

        {[1, 2].map((group) => (
          <div key={group} className="flex gap-12 px-6">
            {services.map((service, i) => (
              <span key={i} className="text-white font-bold text-lg flex gap-2">
                ✦ {service}
              </span>
            ))}
          </div>
        ))}

      </div>

    </div>
  );
}
