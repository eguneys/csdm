const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/devboot.ts',
  devtool: 'inline-source-map',
  devServer: {
    static: [path.resolve(__dirname, 'dist')],
    host: '0.0.0.0',
    port: '3000'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: 'kcapeW'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'kcapeW',
      template: 'src/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png$/i,
        type: 'asset/resource'
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
