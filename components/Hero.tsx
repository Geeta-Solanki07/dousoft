import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F4FAF6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-14 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <p className="text-green-600 font-semibold mb-3 text-sm sm:text-base">
            Trusted IT Partner
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Affordable & Reliable{" "}
            <span className="text-green-600">IT Solutions</span>{" "}
            for Growing Businesses
          </h1>

          <p className="mt-4 text-base sm:text-lg font-medium text-gray-700">
            Build Smarter. Scale Faster. Spend Less.
          </p>

          <p className="mt-4 text-gray-500 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
            At Dousoft IT Solution, we deliver high-quality, affordable IT services
            that help startups, SMEs, and enterprises transform ideas into powerful
            digital solutions—without stretching budgets.
          </p>

          <button className="mt-6 sm:mt-7 bg-green-600 hover:bg-green-700 text-white px-6 sm:px-7 py-3 rounded-full font-semibold shadow transition">
            Book a Free Consultation →
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-8 md:mt-0">

          {/* Background Grid */}
          <div className="absolute inset-0 bg-[url('/grid.png')] opacity-20"></div>

          <Image
            src="/hero.png"
            alt="Hero"
            width={550}
            height={550}
            className="relative z-10 mx-auto w-full max-w-md md:max-w-full"
            priority
          />

        </div>

      </div>
    </section>
  );
}
