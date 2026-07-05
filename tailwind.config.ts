import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        paper: "#f8fafc",
        advisory: {
          navy: "#10233f",
          blue: "#2563eb",
          teal: "#0f766e",
          gold: "#c0841a",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(16, 35, 63, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
