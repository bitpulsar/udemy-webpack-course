const path = require('path');

module.exports = {
  entry: {
    main: [
      // "babel-polyfill",
      // "core-js/fn/promise",
      "./src/main.js"
    ]
  },
  output: {
    filename: "[name]-bundle.js",
    // path: path.resolve(__dirname, "../dist"),
    path: path.resolve(__dirname, "../dist"),
    // publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    stats: {
      colors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      },
      {
          test: /\.(jpg|gif|png)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[name].[ext]"
              }
            }
          ]
      }
    ]
  }
}
