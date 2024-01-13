// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: false,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
