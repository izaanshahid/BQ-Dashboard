var gulp = require('gulp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var gulpConfig = require('./gulp.config');

var options = minimist(process.argv.slice(2));

global.buildOptions = options;
// Enalbe option like --layout1 instead of --layout=layou1
for (var key in buildOptions) {
  if (key.includes('layout')) {
    buildOptions.layout = key;
  }
}
global.isProd = buildOptions.prod;
global.isRTL = buildOptions.rtl;

global.config = gulpConfig({
  srcDir: `../${buildOptions.layout}/src`,
  node_modules: './node_modules',
  distDir: `../${buildOptions.layout}/dist`,
});



gutil.log(gutil.colors.green('Starting Gulp Tasks!!'));

const envTasks = require('./gulp/environment')(gulp);
const cleanTasks = require('./gulp/clean')(gulp);
const scssTasks = require('./gulp/scss')(gulp);
const tailwindTasks = require('./gulp/tailwind')(gulp);
const cssTasks = require('./gulp/css')(gulp);
const rtlTasks = require('./gulp/rtl')(gulp);
const minifyTasks = require('./gulp/minify')(gulp);
const jsTasks = require('./gulp/javascript')(gulp);
const htmlTasks = require('./gulp/html')(gulp);
const staticAssetTasks = require('./gulp/static-asset')(gulp);
const uglifyTasks = require('./gulp/uglify')(gulp);
const serve = require('./gulp/serve')(gulp);

// Generates CSS Distribution files.
const buildCss = gulp.series(cleanTasks.css, scssTasks.compile);
const buildTailwindCss = gulp.series(tailwindTasks.compile);

// // Generates Js Distribution files.

const buildJs = gulp.series(cleanTasks.js, jsTasks.build);

const compressAssets = gulp.series(minifyTasks.css, uglifyTasks.js);

exports.buildCss = gulp.series(buildCss, compressAssets);
exports.buildTailwindCss = gulp.series(buildTailwindCss, compressAssets);
exports.buildJs = gulp.series(buildJs, compressAssets);
// exports.assetCopy = gulp.series(staticAssetTasks.copy);

exports.bundleTest = scssTasks.compile;

const serveHTML = gulp.series(
  buildCss,
  buildTailwindCss,
  buildJs,
  staticAssetTasks.copy,
  compressAssets,
  serve.init,
  gulp.parallel(
    scssTasks.watch,
    jsTasks.watch,
    staticAssetTasks.watch,
    htmlTasks.watch
  )
);

exports.serve = gulp.series(serveHTML);

exports.build = gulp.series(
  buildCss,
  buildTailwindCss,
  buildJs,

  staticAssetTasks.copy,
  compressAssets
);

exports.default = gulp.series(serveHTML);
