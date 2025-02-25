var browserify = require('browserify')

var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var sourcemaps = require('gulp-sourcemaps')
var util = require('gulp-util')
var concat = require('gulp-concat')
const serve = require('./serve')()
var path = require('path')
var gulpif = require('gulp-if')
var helper = require('../helpers')
var fs = require('fs')
const babel = require('gulp-babel')
// const babel = require("babelify");

module.exports = (gulp, callback) => {
    const uglifyTasks = require('./uglify')(gulp)
    const cleanTasks = require('./clean')(gulp)

    const jsCopyTask = function () {
        return gulp
            .src(
                [
                    `**/*.js`,
                    `**/*.json`,
                    `!components/**/*.js`,
                    `!layouts/**/*.js`
                ],
                {
                    cwd: config.src.js
                }
            )
            .pipe(gulp.dest(`${config.dist.js}`))
    }

    const jsBundleTask = function () {
        var tasks = []

        for (var key in config.bundle) {
            var src = config.bundle[key]['src']
            if (src) {
                var jsFiles = []
                for (var package in src) {
                    if (src[package]['js']) {
                        jsFiles = jsFiles.concat(src[package]['js'])
                    }
                }
                if (jsFiles.length) {
                    // console.log(package);
                    tasks.push(
                        (function ({jsFiles, key}) {
                            return function buildJs(done) {
                                return gulp
                                    .src(jsFiles)
                                    .pipe(
                                        babel({
                                            plugins: [
                                                '@babel/plugin-proposal-object-rest-spread'
                                            ]
                                        })
                                    )
                                    .pipe(concat(`${key}.bundle.js`))

                                    .pipe(
                                        gulp.dest(
                                            config.bundle[key]['dist']['js']
                                        )
                                    )

                                // const bundler = browserify({ entries: jsFiles }, { debug: true }).transform(babel);
                                // bundler.bundle()
                                //   .on("error", function (err) { console.error(err); this.emit("end"); })
                                //   .pipe(source(`${key}.bundle.js`))
                                //   .pipe(buffer())
                                //   // .pipe(sourcemaps.init({ loadMaps: true }))
                                //   // .pipe(uglify())
                                //   // .pipe(sourcemaps.write(paths.js.destMapFolder))
                                //   .pipe(gulp.dest(config.bundle[key]['dist']['js']));
                                //   done();
                            }
                        })({jsFiles, key})
                    )
                }
            }
        }

        return gulp.series(...tasks)
    }

    const jsBuildTask = gulp.series(jsCopyTask, jsBundleTask())

    const jsWatchTask = function () {
        return gulp.watch(
            `${config.src.js}/**/*.js`,
            gulp.series(
                cleanTasks.js,
                jsBuildTask,
                uglifyTasks.js,
                serve.reload
            )
        )
    }

    return {
        build: jsBuildTask,
        watch: jsWatchTask
    }
}
