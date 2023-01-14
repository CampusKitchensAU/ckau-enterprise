/** @type {import("prettier").Config} */
module.exports = {
  tailwindConfig: './tailwind.config.cjs',
  plugins: [require('prettier-plugin-tailwindcss')],
};
