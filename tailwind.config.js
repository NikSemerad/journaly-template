/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.0625rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '2rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        inter: ['InterTight', "system-ui"],
      },
      colors: {
        'bubble': '#F7F9FA',
      },
    },
  },
  plugins: [],
}

