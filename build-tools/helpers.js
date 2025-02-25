const fs = require("fs");
const path = require("path");

module.exports = {
  getDirectories: (source) => {
    return fs
      .readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  },

  deleteFolderRecursive: (folderPath) => {
    if (fs.existsSync(folderPath)) {
      fs.readdirSync(folderPath).forEach((file, index) => {
        const curPath = path.join(folderPath, file);
        if (fs.lstatSync(curPath).isDirectory()) {
          // recurse
          deleteFolderRecursive(curPath);
        } else {
          // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(folderPath);
    }
  },

  getCopyVendorFiles: () => {
    let files = [];
    for (var key in config.copy.vendors.source) {
      files = files.concat(config.copy.vendors.source[key]["dir"]);
    }
    return files.map((f) => `${f}/**/*`);
  },

  getFileExt: (path) => {
    return path.substr(path.lastIndexOf('.') + 1);
  }
};
