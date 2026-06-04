import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        red: "var(--red)",
        hairline: "var(--hairline)",
        moss: "var(--moss)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      fontSize: {
        display: "var(--fs-display)",
        h1: "var(--fs-h1)",
        h2: "var(--fs-h2)",
        body: "var(--fs-body)",
        small: "var(--fs-small)",
        meta: "var(--fs-meta)",
        tag: "var(--fs-tag)",
      },
      maxWidth: {
        page: "1320px",
      },
      letterSpacing: {
        mono: "0.06em",
      },
    },
  },
  plugins: [],
};

export default config;
