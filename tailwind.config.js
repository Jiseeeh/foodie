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
    },
  },
  plugins: [],
};
