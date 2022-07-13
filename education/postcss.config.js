module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  'postcss-preset-env': {
    features: { 'nesting-rules': false },
  },
};
