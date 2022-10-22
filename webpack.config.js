const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;

const config = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    },
  },
  entry: {
    main: './public/index.html',
    about: './src/pages/About.js',
    home: './src/pages/Home.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new StatoscopePlugin({
      saveReportTo: './report.html',
      saveStatsTo: './stats.json',
      saveOnlyStats: false,
      open: false,
    }),
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [ // загрузчик для jsx
      {
        test: /\.js?$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: 'babel-loader', // определяем загрузчик
        options: {
          presets: ['@babel/preset-react'], // используемые плагины
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(html)$/, use: ['html-loader'] },
    ],
  },
  // @TODO optimizations
  // @TODO lodash treeshaking
  // @TODO chunk for lodash
  // @TODO chunk for runtime
  // @TODO fallback for crypto
};

module.exports = config;
