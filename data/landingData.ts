import {
  Hero,
  Feature,
  Service,
  Stat,
  Portfolio,
  GlobalPresenceData,
  Testimonial,
  CTAData,
  FooterData,
} from "@/types/landing";

/* ---------------- HERO ---------------- */

export const hero: Hero = {
  subtitle: "Trusted IT Partner",
  title: "Affordable & Reliable IT Solutions for Growing Businesses",
  tagline: "Build smarter. Scale faster. Spend less.",
  buttonText: "Book a Free Consultation →",
  image: "/hero.png",
};

/* ---------------- FEATURES ---------------- */

export const features: Feature[] = [
  { title: "Affordable & transparent pricing" },
  { title: "Experienced global IT professionals" },
  { title: "Proven delivery across industries" },
  { title: "Scalable solutions for long-term growth" },
];

/* ---------------- SERVICES ---------------- */

export const services: Service[] = [
  { title: "Web Design & Development", image: "/services/web.png" },
  { title: "Software Development", image: "/services/software.png" },
  { title: "Mobile App Development", image: "/services/mobile.png" },
  { title: "UI/UX Designing", image: "/services/uiux.png" },
  { title: "IT Consulting & Support", image: "/services/consult.png" },
  { title: "Digital Marketing", image: "/services/marketing.png" },
];

/* ---------------- STATS ---------------- */

export const stats: Stat[] = [
  { number: "5+", label: "Years of Experience" },
  { number: "50+", label: "Skilled IT Professionals" },
  { number: "800+", label: "Projects Executed" },
  { number: "150+", label: "Satisfied Clients" },
];

export const portfolios = [
  {
    title: "Big Bang Crackers – Digital Growth Portfolio",
    image: "/portfolio/work.png",
    category: ["BIG BANG CRACKER", "WORDPRESS"],
    metrics: [
      { value: "14k+", label: "Total Downloads" },
      { value: "4.1★", label: "App Rating" },
    ],
  },
  {
    title: "Magento Commerce Growth Story",
    image: "/portfolio/work2.png",
    category: ["KIRBYALLISON", "MAGENTO"],
    metrics: [
      { value: "400%+", label: "Increase in online revenue within first 6 month" },
      { value: "70%", label: "Increase repeat customer" },
    ],
  },
  {
    title: "Building a Scalable Ride-Sharing Platform from the Ground Up",
    image: "/portfolio/work3.png",
    category: ["ME RIDE", "MOBILE APP"],
    metrics: [
      { value: "100%", label: "User Centered" },
      { value: "100+", label: "Download" },
    ],
  },
  {
    title: "Shopify Ecommerce Growth: Industrial Gear & Oil Pumps Store",
    image: "/portfolio/work4.png",
    category: ["OILPUMPEXPRESS", "SHOPIFY"],
    metrics: [
      { value: "210%", label: "Increase in shopify conversion rate" },
      { value: "45%", label: "Reduction in cart abandonment" },
    ],
  },
  {
    title: "Transforming Bellevue Resort into a Scalable Digital Experience",
    image: "/portfolio/work5.png",
    category: ["BELLEVUE RESORT", "DIGITAL GROWTH FRAMEWORK"],
    metrics: [
      { value: "179%", label: "Website Traffic Increased" },
      { value: "100%", label: "Experience-Driven UX" },
    ],
  },
];
/* ---------------- GLOBAL PRESENCE ---------------- */

export const globalPresence: GlobalPresenceData = {
  title: "Fueling scalable growth with consistent results",
  subtitle: "Global Presence",
  countriesServed: "We Serve 5+ Countries",
  description: "Technology delivered globally, at speed",

  image: "/global/team.png",
  worldMap: "/global/world-map.png",

  countries: [
    { name: "United Kingdom", flag: "/flags/uk.png" },
    { name: "USA", flag: "/flags/usa.png" },
    { name: "Australia", flag: "/flags/aus.png" },
    { name: "India", flag: "/flags/india.png" },
    { name: "Thailand", flag: "/flags/thailand.png" },
  ],
};

/* ---------------- TESTIMONIAL ---------------- */

export const testimonial: Testimonial = {
  name: "Sarah Chen",
  designation: "CTO @ Apex",
  quote: "Dousoft's vision drove our 40% growth in one year.",

  review:
    "Working with Dousoft has truly been a game-changer for our business. Their technology and expertise helped us scale operations efficiently and deliver outstanding results.",

  image: "/client.png",
};

/* ---------------- CTA ---------------- */

export const cta: CTAData = {
  title: "Ready to Start Your Project?",
  subtitle:
    "Let's discuss how we can turn your ideas into reality— quickly and affordably.",
  buttonText: "Let's Get Started",

  points: ["No obligation", "No hidden costs", "Just expert advice"],
};

/* ---------------- FOOTER ---------------- */

export const footer: FooterData = {
  email: "info@dousoft.com",
  website: "www.dousoft.com",
  phone: "+91 77349 96636",
  copyright: "© 2026 Dousoft IT Solution Pvt. Ltd.",
};


export const processSteps = [
  {
    title: "Research",
    desc: "We begin by analyzing your company's requirements, issues and long-term plans to ensure total integration.",
  },
  {
    title: "Planning",
    desc: "Based on our findings we then create a comprehensive outline of the project's steps which ensures transparency, clarity and effectiveness.",
  },
  {
    title: "Development",
    desc: "Our team develops solid functional designs and logical logic by using rapid and agile development methods without sacrificing quality.",
  },
  {
    title: "Execution",
    desc: "We integrate all components, analyse the performance of the system, spot problems, and ensure seamless operation.",
  },
  {
    title: "Testing",
    desc: "Complete testing reports are created to ensure a secure, reliable, and error-free product prior to the launch.",
  },
  {
    title: "Results",
    desc: "We will deliver the final product, and we support your launch to help you transform technology into a business's success.",
  },
];