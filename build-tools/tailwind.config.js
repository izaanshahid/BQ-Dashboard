var minimist = require('minimist');
var options = minimist(process.argv.slice(2));
const colors = require('tailwindcss/colors');
global.buildOptions = options;
// Enalbe option like --layout1 instead of --layout=layou1
for (var key in buildOptions) {
  if (key.includes('layout')) {
    buildOptions.layout = key;
  }
}
// console.log(buildOptions.color);
// console.log(colors[buildOptions.color]);
// console.log(colors);
let successColor = 'green';
let primaryColor = 'violet';
global.isProd = buildOptions.prod;
if (buildOptions.color) {
  primaryColor = buildOptions.color;
  successColor = 'violet';
} else {
  successColor = 'green';
}

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  purge: {
    enabled: global.isProd,
    content: ['../**/**/*.html', '../**/*.html'],
  },
  theme: {
    extend: {
      colors: {
        primary: colors[primaryColor],
        success: colors[successColor],
        danger: colors.red,
        warning: colors.yellow,
        info: colors.indigo,
        gray: colors.blueGray,
        neutral: colors.gray,
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
};
