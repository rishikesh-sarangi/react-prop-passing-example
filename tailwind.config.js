/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        NotoSans: ["Noto Sans Mahajani", "sans-serif"],
      },
      maxWidth: {
        xxs: "10rem",
      },
    },
  },
  plugins: [],
};
