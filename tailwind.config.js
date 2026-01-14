/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        primetime: ['Primetime', 'sans-serif'],
        valorant: ['Valorant', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
