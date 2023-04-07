const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "pickup-logo": "url('/svg/Pickup-Logo.svg')",
        "package-logo": "url('/svg/Package-Logo.svg')",
        "delivery-logo": "url('/svg/Delivery-Logo.svg')",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        25: "repeat(25, minmax(0, 1fr))",
      },
      colors: {
        primary: {
          contrast: "#FFFFFF",
          100: "#C3D3E8",
          200: "#AABCD2",
          300: "#788DA6",
          400: "#425B7A",
          500: "#133259",
          DEFAULT: "#03244D",
          700: "#031B3A",
          800: "#021227",
          900: "#010914",
        },
        secondary: {
          contrast: "#000000",
          50: "#FFEDD5",
          100: "#F7C7A3",
          200: "#EEA171",
          300: "#E67B3F",
          400: "#E26826",
          DEFAULT: "#DD550C",
          600: "#C54B0E",
          700: "#AD410F",
          800: "#953711",
          900: "#7C2D12",
        },
        surface: {
          background: "#F6FAFF",
          main: "#D8E9FD",
          primaryLight: "#B1D4FB",
          secondaryLight: "#FBCBB1",
        },
        alt: {
          purpleChip: "#C0B1FB",
          purpleDark: "#3D0AF5",
          purpleLight: "#7753F8",
          greyChip: "#BFBFBF",
          orangeDark: "#F25E0D",
          orangeLight: "#F68E55",
          deliveryBlue: "#407BFF",
          packageGreen: "#92E3A9",
          pickupYellow: "#FFC100",
          divider: "#e0e0e0",
        },
        text: {
          primary: "#000000",
          secondary: "#626466",
          contrast: "#FFFFFF",
        },
      },
      screens: {
        xs: "320px",
        sm1: "375px",
        sm2: "425px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
