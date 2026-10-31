/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        banimode: ["banimode"],
      },
      colors: {
        gray50: "#EDEDED",
        gray75:"#FBFBFB",
        gray100: "#F5F5F7",
        gray200: "#9CA3AF",
        gray300:"#80858C",
        gray600: "#808080",
        gray700: "#53565A",
        gray900: "#53565A",
        green300: "#00BF6F",
        green400: "#19B16A",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
