/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
      "-moz-backface-visibility": "visible",
      "-webkit-backface-visibility": "visible",
      "-ms-backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
      "-moz-backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden",
      "-ms-backface-visibility": "hidden",
    },
  });
});
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1C",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        menuText: "#1c1c1c",
        borderGrey: "#eaecf0",
        styleupPurple: "#7F56D9",
        footerBlack: "#191919",
        headerGray: "#6F6F71",
      },
      fontFamily: {
        inter: ["Inter"],
        playfair: ["Playfair Display"],
      },
      animation: {
        typing: "typing 1.2s steps(11), blink 1s steps(2) infinite",
        wave: "wave 15s linear infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "9ch" },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        },
        wave: {
          to: { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        hiw: "0px 8px 8px -4px rgba(138, 96, 176, 0.03), 0px 20px 24px -4px rgba(138, 96, 176, 0.08)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      threeCol: "1139px",
      lg: "1200px",
      fourCol: "1453px",
      xl: "1700px",
    },
  },
  plugins: [backfaceVisibility],
};
