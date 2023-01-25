/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        background: "hsl(180, 52%, 96%)",
        darkCyan: "hsl(180, 8%, 52%)",
        VeryDarkCyan: "hsl(180, 14%, 20%)",
      },
      backgroundImage: {
        "header-mob": "url('images/bg-header-mobile.svg')",
        "header-desk": "url('images/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
};
