import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-[#F4FAF6]">
      <div className="max-w-7xl mx-auto px-5 py-4">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 ">
            <Image src="/logo.jpeg" alt="logo" width={85} height={85} />
            {/* <span className="font-bold text-lg">DOUSOFT</span> */}
          </div>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              +91 77349 96636
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              info@dousoftit.com
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}
