module.exports = {
  entry: "dist/src/third-party/app.ts",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader"}
    ]
  }
}