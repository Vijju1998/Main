const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        gray: colors.neutral,
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [],
  },
  variants: {
    extend: {},
  },
};
