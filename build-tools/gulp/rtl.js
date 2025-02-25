// TASKS IN THIS FILE ARE NOT BEING USED
// CHECK scss.js FOR RTL 

var rename = require("gulp-rename")
var gulpif = require('gulp-if');
var rtlcss = require('gulp-rtlcss');

module.exports = (gulp, callback) => {
  
  // RTL CSS
  const rtlCssTask = function() {
    const isRTL = buildOptions.layout && buildOptions.layout.indexOf('rtl') !== -1;
    return gulp
      .src(["**/*.min.css", `!**/*.rtl.css`], { cwd: config.dist.css })
      .pipe(gulpif(isRTL, rtlcss()))
      .pipe(gulpif(isRTL, gulp.dest(config.dist.css)));
  }

  const rtlCoreCssTask = function() {
    const isRTL = buildOptions.layout && buildOptions.layout.indexOf('rtl') !== -1;
    return gulp
      .src(["**/*.min.css", `!plugins/**/*.css`], { cwd: config.dist.css })
      .pipe(gulpif(isRTL, rtlcss()))
      .pipe(gulpif(isRTL, rename({ suffix: '.rtl' })))
      .pipe(gulpif(isRTL, gulp.dest(config.dist.css)));
  }

  return {
    rtlCss: rtlCssTask,
    rtlCoreCss: rtlCoreCssTask
  }
}
