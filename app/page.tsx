// // import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import ServiceStrip from "@/components/ServiceStrip";

// export default function Home() {
//   return (
//     <><Navbar /><Hero /><ServiceStrip /></>
// //  <div>Riya</div>
//   );
// }

import HeroSection from "@/components/sections/HeroSection";
import WhyChoose from "@/components/sections/WhyChoose";
import GlobalPresence from "@/components/sections/GlobalPresence";
import PortfolioSection from "@/components/sections/PortfolioSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChoose />
      <GlobalPresence/>
      <PortfolioSection />
      <ProcessSection />
      <IndustriesSection />

    </>
  );
}
