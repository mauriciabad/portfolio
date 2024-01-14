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
      fontFamily: {
        sans: sansFonts,
        title: ["Fraunces Variable", "Fraunces", ...sansFonts],
      },
    },
  },
  plugins: ["@tailwindcss/typography"],
}
