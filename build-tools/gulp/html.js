const serve = require("./serve")();

module.exports = (gulp, callback) => {
  const HTMLWatchTask = function() {
    return gulp.watch(
      `${config.dist.dir}/**/*.html`,
      gulp.series(serve.reload)
    );
  };

  return {
    watch: HTMLWatchTask
  };
};
