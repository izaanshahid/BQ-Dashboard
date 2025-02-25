var uglify = require("gulp-uglify-es").default;
var rename = require("gulp-rename");
var wait = require('gulp-wait');
var gulpif = require('gulp-if');
var del = require('del');

module.exports = (gulp, callback) => {
  const uglifyJsTask = function() {
    return gulp
      .src(["**/*.js", "!**/*.min.js", "!**/sweet-alerts.js"], {
        cwd: config.dist.js
      })
      .pipe(gulpif(isProd, uglify()))
      .on("error", function(err) {
        console.log("\x1b[31m", err.toString());
      })
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest(config.dist.js));
  };

  return {
    js: uglifyJsTask
  };
};
