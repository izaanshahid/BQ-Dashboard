var cssmin = require("gulp-cssmin")
var rename = require("gulp-rename")
var gulpif = require('gulp-if');

module.exports = (gulp, callback) => {

  const cssMinTask = function() {
    return gulp
      .src(["**/*.css", "!**/*.min.css"], { cwd: config.dist.css })
      .pipe(gulpif(isProd, cssmin()))
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest(config.dist.css))
  }


  return {
    css: cssMinTask
  }
}
