// TASKS IN THIS FILE ARE NOT BEING USED

var concat = require("gulp-concat");
var helper = require('../helpers');

module.exports = (gulp, callback) => {

  // Bundle Third party css
  // const cssPluginConcatTask = function() {
  //   const pluginFiles = helper.getBundleVendorFiles('required', 'css')
  //   .concat(helper.getBundleVendorFiles('optional', 'css'))

  //   return gulp
  //     .src(pluginFiles)
  //     .pipe(concat('plugins.bundle.css'))
  //     .pipe(gulp.dest(`${config.dist.css}`))
  // }


  return {
    // pluginConcat: cssPluginConcatTask
  }
}
