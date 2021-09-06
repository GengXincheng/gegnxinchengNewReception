module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211:8216/",
        //   pathRewrite: {"^/api" : ""}
      },
    },
  },
};
