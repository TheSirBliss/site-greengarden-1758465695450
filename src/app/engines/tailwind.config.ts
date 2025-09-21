/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Questo singolo percorso analizza correttamente tutto dentro /src
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
