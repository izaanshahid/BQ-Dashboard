var sass = require('gulp-sass')
var tildeImporter = require('../tilde-importer')
var sourcemaps = require('gulp-sourcemaps')
var concat = require('gulp-concat')
var gulpif = require('gulp-if')
var rtlcss = require('gulp-rtlcss')
var postcss = require('gulp-postcss')

const serve = require('./serve')()

module.exports = (gulp, callback) => {
    const minifyTasks = require('./minify')(gulp)
    // const rtlTasks = require("./rtl")(gulp);

    const tailwindBundleCompileTask = function () {
        var tasks = []
        var key = 'tailwind'
        if (config.bundle['tailwind']) {
            var src = config.bundle['tailwind']['src']
            if (src) {
                var files = []
                for (var package in src) {
                    if (src[package]['style']) {
                        files = files.concat(src[package]['style'])
                    }
                }

                if (files.length) {
                    tasks.push(
                        (function ({files, key}) {
                            return function buildCss() {
                                return gulp
                                    .src(files)

                                    .pipe(gulpif(!isProd, sourcemaps.init()))
                                    .pipe(
                                        sass({
                                            importer: tildeImporter
                                        }).on('error', sass.logError)
                                    )
                                    .pipe(concat(`${key}.bundle.css`))
                                    .pipe(
                                        postcss([
                                            // ...
                                            require('tailwindcss'),
                                            require('autoprefixer')

                                            // ...
                                        ])
                                    )
                                    .pipe(gulpif(isRTL, rtlcss()))
                                    .pipe(
                                        gulpif(!isProd, sourcemaps.write('.'))
                                    )
                                    .pipe(
                                        gulp.dest(
                                            config.bundle[key]['dist']['style']
                                        )
                                    )
                            }
                        })({files, key})
                    )
                }
            }
        }

        return gulp.series(...tasks)
    }

    const tailwindCompileTask = gulp.series(tailwindBundleCompileTask())

    const tailwindWatchTask = function () {
        return gulp.watch(
            `${config.src.scss}/**/*.css`,
            gulp.series(
                tailwindCompileTask,
                minifyTasks.css,
                // rtlTasks.rtlCoreCss,
                serve.reload
            )
        )
    }

    return {
        compile: tailwindCompileTask,
        watch: tailwindWatchTask
    }
}
