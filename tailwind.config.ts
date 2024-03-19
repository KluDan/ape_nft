/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc3b5a",
        main: "#181818",
        textBlack: "#1e1e1e",
        opacityBlack: "rgba(30, 30, 30, 0.1)",
        gray: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        grotesk: "var(--font-grotesk)",
        messina: "var(--font-messina)",
        biro: "var(--font-biro)",
      },
      screens: {
        xs: "480px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
    },
  },
  plugins: [],
};
