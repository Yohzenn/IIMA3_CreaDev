/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        primetime: ['Primetime', 'sans-serif'],
        valorant: ['Valorant', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
