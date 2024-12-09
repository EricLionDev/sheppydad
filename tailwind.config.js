/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // All files in src
    './components/**/*.{html,js,jsx}', // Additional custom component folder
    './index.html',
  ],
  safelist: ['border-neutral-800'],
  theme: {
    extend: {
      fontFamily: {
        slackey: ['Slackey', 'cursive'], // Add Slackey font
        lato: ['Lato', 'sans-serif'], // Existing font (optional)
      },
    },
  },
  plugins: [],
};
