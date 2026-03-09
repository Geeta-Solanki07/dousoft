"use client";

import Image from "next/image";

const services = [
  {
    title: "Web Design & Development",
    img: "/services/web.png",
  },
  {
    title: "Software Development",
    img: "/services/f2.png",
  },
  {
    title: "Mobile App Development",
    img: "/services/f3.png",
  },
  {
    title: "UI/UX Designing",
    img: "/services/f4.png",
  },
  {
    title: "IT Consulting & Support",
    img: "/services/f5.png",
  },
  {
    title: "Digital Marketing",
    img: "/services/f6.png",
  },
];

export default function Services() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1150px] mx-auto px-4 flex flex-col gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between border-b pb-8"
          >
            {/* IMAGE */}
            <div className="w-[377px] h-[141px] relative rounded-full overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <h3 className="text-[26px] md:text-[32px] text-[#3A3A3A] text-center md:text-left mt-4 md:mt-0 font-normal">
              {service.title}
            </h3>

          </div>
        ))}

      </div>
    </section>
  );
}