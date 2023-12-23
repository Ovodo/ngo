import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        docBlue: "#2186FC",
        docBlack: "#404040",
        patientBlue: "#1B00EA",
        docAsh: "#909090",
        docP: "#4200FF",
        darkBlue: "rgba(38, 51, 93, 1)",
        textAsh: "#404040",
      },
    },
  },
  plugins: [],
};
export default config;
