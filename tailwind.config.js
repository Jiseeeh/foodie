/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nav-wave": "url('/waves.svg')",
        "ramen-egg": "url('/ramen-2.jpg')",
        ramen: "url('/ramen-1.jpg')",
        "food-bg": "url('/food-bg.jpg')",
      },
      aspectRatio: {
        "960/300": "960 / 300",
      },
      backgroundColor: {
        "dimmed-blue": "#6888b1",
        "dimmed-green": "#e0ecc1",
      },
      textColor: {
        "dimmed-blue": "#6888b1",
      },
    },
  },
  plugins: [],
};
