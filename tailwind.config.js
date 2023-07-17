/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        height: {
          'h-68': '270px',
        },
        color: {
          'crech-blue': '#4318FF',
        },
        backgroundColor: {
          'crech-blue': '#4318FF',
        }
      }
  },
  plugins: [],
}
