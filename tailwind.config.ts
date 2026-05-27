import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        ink: "#000000",
        mute: "#A8A6A0",
      },
      fontFamily: {
        display: ['"Hanken Grotesk"', "sans-serif"],
        ui: ['"Hanken Grotesk"', "sans-serif"],
        body: ['"Hanken Grotesk"', "sans-serif"],
        mono: ['"Hanken Grotesk"', "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
