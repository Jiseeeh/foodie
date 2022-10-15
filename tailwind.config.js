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
