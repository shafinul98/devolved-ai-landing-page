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
      screens: {
        '5xl': '5120px',
        '4xl': '3841px',
        '3xl': '2561px',
        '2xl': '1921px',
        'xl': '1281px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'xs': '0',
      },
    },
  },
  plugins: [],
};
export default config;
