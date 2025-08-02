/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37', // BitBridge primary
        background: '#0B0B0B',
        text: '#FFFFFF',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

