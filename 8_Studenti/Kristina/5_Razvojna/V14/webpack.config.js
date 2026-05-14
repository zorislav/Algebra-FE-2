const path = require("path");

module.exports = {
  entry: "./main.js",
  mode: "production",
  output: {
    path: path.resolve(_dirname, "dist"),
    filename: "myscripts.js",
  },

  resolve: {
    falback: {
      fs: false,
    },
    alias: {
      handelbars: "handelbars/dist/handelbars.min.js",
    },
  },
};
