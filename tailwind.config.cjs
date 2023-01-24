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
        '16': 'repeat(16, minmax(0, 1fr))',
        '25': 'repeat(25, minmax(0, 1fr))'
      },
      colors: {
        primary: {
          contrast: "#FFFFFF",
          100: "#D2DBE7",
          200: "#A4B7CE",
          300: "#496E9C",
          400: "#285389",
          500: "#063875",
          600: "#03244D",
          700: "#021327",
          800: "#020F1D",
          900: "#010A13",
        },
        secondary: {
          contrast: "#000000",
          100: "#FBC69D",
          200: "#FBC093",
          300: "#F68026",
          400: "#F5721E",
          500: "#F36416",
          600: "#E85D11",
          700: "#DD550C",
          800: "#AE3D00",
          900: "#9E3700",
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
    },
  },
  plugins: [],
};
