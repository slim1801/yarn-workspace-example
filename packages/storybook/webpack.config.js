module.exports = config => {
  config.entry.preview.unshift("babel-polyfill");
  return Object.assign({}, config, {
    resolve: {
      extensions: [".js", ".jsx"],
      mainFields: ["entry", "main"]
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ["babel-loader"],
          exclude: /node_modules/
        }
      ]
    }
  });
};
