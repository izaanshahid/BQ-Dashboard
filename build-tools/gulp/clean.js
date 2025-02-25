var clean = require("gulp-clean")

module.exports = (gulp, callback) => {

  const cleanCssTask = function() {

    return gulp
      .src(config.dist.css, {
        read: false,
        allowEmpty: true
      })
      .pipe(clean({
        force: true
      }))
  }

  const cleanJsTask = function() {

    return gulp
      .src(config.dist.js, {
        read: false,
        allowEmpty: true
      })
      .pipe(clean({
        force: true
      }))
  }


  return {
    css: cleanCssTask,
    js: cleanJsTask
  }

}