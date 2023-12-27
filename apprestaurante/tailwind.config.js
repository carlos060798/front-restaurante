/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js",
];
// eslint-disable-next-line no-undef
export const plugins = [require("tw-elements/dist/plugin.cjs")];
export const darkMode = "class";