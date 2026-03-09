import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import OurServices from "@/components/OurServices";
import State from "@/components/StatsSection";
import Global from "@/components/Global";
import Portfolio from "@/components/Portfolio";
import Industry from "@/components/Industry";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Services from "@/components/Services"
import ServicesStrip from "@/components/ServicesStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <ServicesStrip />
      
        {/* <OurServices /> */}
        <State />
        <Global />
        <Portfolio />
        <Industry />
        <Testimonials />
        <CTA />
        <Footer />

    </>
  );
}
