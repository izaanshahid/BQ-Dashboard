var sass = require('gulp-sass');
var tildeImporter = require('../tilde-importer');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var rtlcss = require('gulp-rtlcss');
var postcss = require('gulp-postcss');

const serve = require('./serve')();

module.exports = (gulp, callback) => {
  const minifyTasks = require('./minify')(gulp);
  // const rtlTasks = require("./rtl")(gulp);

  const scssBundleCompileTask = function () {
    var tasks = [];
    for (var key in config.bundle) {
      if (key != 'tailwind') {
        var src = config.bundle[key]['src'];
        if (src) {
          var files = [];
          for (var package in src) {
            if (src[package]['style']) {
              files = files.concat(src[package]['style']);
            }
          }

          if (files.length) {
            tasks.push(
              (function ({ files, key }) {
                return function buildCss() {
                  return gulp
                    .src(files)

                    .pipe(gulpif(!isProd, sourcemaps.init()))
                    .pipe(
                      sass({
                        importer: tildeImporter,
                      }).on('error', sass.logError)
                    )
                    .pipe(concat(`${key}.bundle.css`))
                    .pipe(
                      postcss([
                        // ...
                        require('tailwindcss'),
                        require('autoprefixer'),

                        // ...
                      ])
                    )
                    .pipe(gulpif(isRTL, rtlcss()))
                    .pipe(gulpif(!isProd, sourcemaps.write('.')))
                    .pipe(gulp.dest(config.bundle[key]['dist']['style']));
                };
              })({ files, key })
            );
          }
        }
      }
    }

    return gulp.series(...tasks);
  };

  const scssCompileTask = gulp.series(scssBundleCompileTask());

  const scssWatchTask = function () {
    return gulp.watch(
      `${config.src.scss}/**/*.scss`,
      gulp.series(
        scssCompileTask,
        minifyTasks.css,
        // rtlTasks.rtlCoreCss,
        serve.reload
      )
    );
  };

  return {
    compile: scssCompileTask,
    watch: scssWatchTask,
  };
};
