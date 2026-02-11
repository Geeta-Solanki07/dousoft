/* ================= HERO ================= */

export interface Hero {
  subtitle: string;
  title: string;
  tagline: string;
  buttonText: string;
  image: string;
}

/* ================= SERVICES ================= */

export interface Service {
  title: string;
  image: string;
}

/* ================= FEATURES ================= */

export interface Feature {
  title: string;
}

/* ================= STATS ================= */

export interface Stat {
  number: string;
  label: string;
}

/* ================= PORTFOLIO ================= */

export interface PortfolioMetric {
  value: string;
  label: string;
}

export interface Portfolio {
  title: string;
  image: string;
  category?: string[];
  metrics?: PortfolioMetric[];
}

/* ================= GLOBAL PRESENCE ================= */

export interface Country {
  name: string;
  flag: string;
}

export interface GlobalPresenceData {
  title: string;
  subtitle: string;
  countriesServed: string;
  description: string;
  image: string;
  worldMap: string;
  countries: Country[];
}

/* ================= TESTIMONIAL ================= */

export interface Testimonial {
  name: string;
  designation: string;
  quote: string;
  review: string;
  image: string;
}

/* ================= CTA ================= */

export interface CTAData {
  title: string;
  subtitle: string;
  buttonText: string;
  points: string[];
}

/* ================= FOOTER ================= */

export interface FooterData {
  email: string;
  website: string;
  phone: string;
  copyright: string;
}
