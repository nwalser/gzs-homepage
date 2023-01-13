/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': '#d2031d',
          },
        },
      }),
    },
    fontFamily: {
      'inter': ['\'Inter\'', 'sans-serif'],
    },
    animation: {
      text: 'text 5s ease infinite',
    },
    keyframes: {
      text: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
  ],
}
