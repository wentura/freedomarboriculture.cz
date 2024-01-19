/** @type {import('tailwindcss').Config} */
module.exports = {
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
        zelena: "#8db600",
        tmavazelena: "#526a00",
        tmava: "#232d00",
        cerna: "#040500",
        ruzova: "#b6008d",
        cervena: "#b62900",
        modra: "#008db6",
      },
    },
  },
  plugins: [],
};
