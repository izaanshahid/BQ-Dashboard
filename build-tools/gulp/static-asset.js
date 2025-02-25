const serve = require("./serve")();
const helpers = require("../helpers");
var gutil = require("gulp-util");
var gulpif = require("gulp-if");
// var uglify = require("gulp-uglify-es").default;
// var UglifyJS = require("uglify-js");

var sass = require("gulp-sass");
var tildeImporter = require("../tilde-importer");
var sourcemaps = require("gulp-sourcemaps");
var rtlcss = require('gulp-rtlcss');


module.exports = (gulp, callback) => {

  const mainCopyTask = function () {
    var tasks = [];

    for (var key in config.copy) {
      let assetDir = config.copy[key];
      let dirs = [];
      for (var package in assetDir.src) {
        dirs = dirs.concat(assetDir.src[package].dir);
      }

      dirs = dirs.map((d) => `${d}/**/*`);

      tasks.push(
        (function ({ dirs, key }) {
          return function copy() {
            gutil.log(gutil.colors.yellow(`Starting ${key} copy tasks!!`));

            if (assetDir.option && assetDir.option.sass) {
              return gulp
                .src(dirs, { base: `${assetDir.baseDir}/` })
                .pipe(sourcemaps.init())
                .pipe(
                  sass({
                    importer: tildeImporter,
                  }).on("error", sass.logError)
                )
                .pipe(gulpif(isRTL, rtlcss()))
                .pipe(sourcemaps.write("."))
                .pipe(gulp.dest(assetDir.dist));
            } else {
              return gulp
                .src(dirs, { base: `${assetDir.baseDir}/` })
                .pipe(gulp.dest(assetDir.dist));
            }
          };
        })({ dirs, key })
      );
      //  console.log(dirs);
    }

    return gulp.series(...tasks);
  };

  const assetsCopyTask = gulp.series(mainCopyTask());

  const assetsWatchTask = function () {
    let dirs = [];

    for (var key in config.copy) {
      let assetDir = config.copy[key];
      for (var package in assetDir.src) {
        dirs = dirs.concat(assetDir.src[package].dir);
      }
    }
    dirs = dirs.map((d) => `${d}/**/*`);
    return gulp.watch(dirs, gulp.series(assetsCopyTask, serve.reload));
  };

  return {
    copy: assetsCopyTask,
    watch: assetsWatchTask,
  };
};
