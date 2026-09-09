/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#c0c1ff",
        "secondary": "#4edea3",
        "background": "#13131b",
        "surface": "#13131b",
        "on-surface": "#e4e1ed",
        "on-surface-variant": "#c7c4d7",
        "primary-container": "#8083ff",
        "surface-container-high": "#292932",
        // أضف بقية الألوان من الكود الأصلي هنا
      },
      fontFamily: {
        h1: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};