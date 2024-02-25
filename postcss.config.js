const postcssNesting = require('postcss-nesting');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');

module.exports = {
  plugins: [postcssNesting, autoprefixer, stylelint],
};
