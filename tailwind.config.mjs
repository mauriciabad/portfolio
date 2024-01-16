const defaultTheme = require("tailwindcss/defaultTheme")

const sansFonts = [
  "Inter Variable",
  "InterVariable",
  "Inter",
  ...defaultTheme.fontFamily.sans,
]

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      fontFamily: {
        sans: sansFonts,
        title: ["Fraunces Variable", "Fraunces", ...sansFonts],
      },
      colors: {
        "semi-gray": {
          700: "#3e495bbf",
          800: "#212c3bbf",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("@xpd/tailwind-3dtransforms"),
    require("tailwindcss-easing"),
  ],
}
