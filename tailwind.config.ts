import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1A1A2E",
        paper: "#F5F1EB",
        advisory: {
          navy: "#1B2A4A",
          stone: "#F5F1EB",
          gold: "#C9922A",
          ink: "#1A1A2E",
          slate: "#E8EBF0",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(27, 42, 74, 0.10)",
        card: "0 10px 30px rgba(27, 42, 74, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
