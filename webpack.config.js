const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const getStyleLouder = () => [
  isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader',
];

const getPlugins = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      cache: false,
    }),
  ];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css',
      }),
      new CleanWebpackPlugin(),
    );
  }

  return plugins;
};

const jsLoaders = () => {
  const loaders = ['babel-loader'];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

module.exports = () => ({
  mode: isProd ? 'development' : 'production',

  entry: './src/index.js',

  output: {
    filename: isProd ? 'main-[hash:8].js' : undefined,
    path: path.resolve(process.cwd(), 'dist')
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: jsLoaders(),
    },
    {
      test: /\.(png|jpg|jpeg|gif|ico)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'image',
          name: '[name]-[sha1:hash:7].[ext]',
        },
      }],
    },
    {
      test: /\.(ttf|otf|eot|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
          name: '[name].[ext]',
        },
      }],
    },
    {
      test: /\.(css)$/,
      use: getStyleLouder(),
    },
    {
      test: /\.(s[ca]ss)$/,
      use: [...getStyleLouder(), 'sass-loader'],
    },
    ],
  },

  plugins: getPlugins(),

  devServer: {
    open: true,
  },
});
