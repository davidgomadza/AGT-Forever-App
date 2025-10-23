/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-start': '#314078', // Start color for gradient
        'bg-end': '#1A2449',   // End color for gradient
        'btn-start': '#FFE586', // Start color for gradient
        'btn-end': '#F2BE1D',   // End color for gradient
        'btn-blue': '#28376B',
      },
      backgroundImage: theme => ({
        'bg': `linear-gradient(135deg, ${theme('colors.bg-start')}, ${theme('colors.bg-end')})`,
        'btn': `linear-gradient(135deg, ${theme('colors.btn-start')}, ${theme('colors.btn-end')})`,
      }),
    },
  },
  plugins: [require('daisyui')],
}
