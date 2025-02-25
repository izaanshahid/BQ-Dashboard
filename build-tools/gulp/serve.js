var browserSync = require("browser-sync").create();

module.exports = (gulp, callback) => {

  const browserSyncInit = (done) => {
    browserSync.init({
      server: `../${buildOptions.layout || './layout1'}/dist/`,
      startPath: `index.html`
    });
    done();
  };

  const browserSyncReload = (done) => {
    browserSync.reload();
    done();
  }


  return {
    init: browserSyncInit,
    reload: browserSyncReload
  }
}