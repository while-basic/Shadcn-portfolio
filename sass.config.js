const sass = require('sass');

module.exports = {
  implementation: sass,
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@import "variables.scss";`,
  },
};
