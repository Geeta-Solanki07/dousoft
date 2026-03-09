import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        konexy: ["Konexy Personal Use", "sans-serif"],
        noto: ["var(--font-noto)"],
      },
    },
  },
  plugins: [],
};

export default config;