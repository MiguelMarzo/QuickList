const path = require("path");
const webpack = require("webpack");
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    publicPath: "http://localhost:3000/dist/",
    port: 5000,
    hotOnly: true,
    host: '0.0.0.0',
    compress: true,
    historyApiFallback: true,
    stats: 'minimal',
    overlay: true,
    clientLogLevel: 'info',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
    new GenerateSW({       
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: /\.(?:png|jpg|jpeg|svg|js|ts|tsx|jsx|json)$/,
        handler: 'CacheFirst',
      }],
    }),
  ]
};
