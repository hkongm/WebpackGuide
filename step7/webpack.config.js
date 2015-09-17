module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(png|jpg)$/,
        // loader: 'url-loader?limit=8192'
        loader: 'url-loader?limit=192&name=./imgs/[hash].[ext]'
      }
    ]
  }
};
