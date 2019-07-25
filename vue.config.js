module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.csv$/i,
          use: 'raw-loader',
        },
      ],
    },
  },
};
