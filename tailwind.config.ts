import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FF7000 ",
          100: "#FFF1E6",
        },
        dark: {
          100: "#000000",
          2000: "#0F1117",
        },
      },
    },

    plugins: [],
  },
};
export default config;
