/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",  
],
  theme: {
    extend: {
      fontFamily: {
        banimode: ["banimode"],
      },
      colors: {
        white25:"#F0F0F2",
        white100:"#F5F5F7",
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
        green500:"#229F5E",
        red300:"#FD1E16",
        orange300:"#F06425",
        orange400:"#FFA800",
        orange800:"#DB7700",
        black400:"#2E2E2E",
        purple800:"#562430",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
