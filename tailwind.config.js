/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,jsx}',
    './pages/**/*.{html,jsx}',
    './index.html',

  ],
  plugins: [require("@tailwindcss/forms")],

  // ...
}