import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import State from "@/components/StatsSection";
import Global from "@/components/Global";
import Portfolio from "@/components/Portfolio";
import Industry from "@/components/Industry";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ServicesStrip from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
        <OurServices />
        <State />
        <Global />
        <Portfolio />
        <Industry />
        <Testimonials />
        <CTA />
        <Footer />

      {/* <ServicesStrip /> */}
    </>
  );
}
