import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      colors: {
        background: "#08060E",
        surface: "#0D0A18",
        "surface-2": "#120E22",
        border: "rgba(255,255,255,0.08)",
        foreground: "#F5F3FF",
        muted: "#948DB0",
        "muted-2": "#6F6890",
        violet: {
          400: "#9B7DFF",
          500: "#7C5CFF",
          600: "#6640F5",
        },
        blue: {
          400: "#5FA0FF",
          500: "#3E8EFF",
          600: "#2C6FE0",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #7C5CFF 0%, #3E8EFF 100%)",
        "gradient-radial-violet":
          "radial-gradient(circle at 50% 0%, rgba(124,92,255,0.25), transparent 60%)",
        "gradient-radial-blue":
          "radial-gradient(circle at 80% 20%, rgba(62,142,255,0.18), transparent 55%)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
