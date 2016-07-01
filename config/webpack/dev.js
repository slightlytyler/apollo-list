const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const autoprefixer = require('autoprefixer');
const argv = require('yargs').argv;

const __root = path.join(__dirname, '../../');
const __src = path.join(__root, 'src');
const __assets = path.join(__src, 'assets');
const __icons = path.join(__assets, 'icons');
const __static = path.join(__src, 'static');
const __dist = path.join(__root, 'dist');
const __node_modules = path.join(__root, 'node_modules');

const env = process.env.NODE_ENV || 'development';
const globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(env),
  },
  __NODE_ENV__: JSON.stringify(env),
  __DEV__: env === 'development',
  __PROD__: env === 'production',
  __TEST__: env === 'test',
  __DEBUG__: env === 'development' && !argv.no_debug,
  __BASENAME__: JSON.stringify(process.env.BASENAME || ''),
};

const config = {
  entry: path.join(__src, 'main.js'),
  output: {
    path: __dist,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer:{
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin(globals),
    new HtmlWebpackPlugin({
      template: path.join(__src, 'index.html'),
      filename: globals.__DEV__ ? 'index.html' : '200.html',
      inject: 'body',
      favicon: path.join(__static, 'favicon.ico'),
    }),
    new ExtractTextPlugin('styles.css'),
    new CopyWebpackPlugin(
      [{ from: __static, ignore: '.DS_Store' }]
    ),
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: __src,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: __src,
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus-relative?resolve url'),
      },
      {
        test: /\.otf$/,
        loader: 'url',
      },
      {
        test: /\.svg$/,
        loader: 'raw',
        incude: __icons,
      },
      {
        test: /\.svg|\.png$/,
        loader: 'url',
        exclude: __icons,
      },
    ],
  },
  resolve: {
    fallback: __node_modules,
    alias: {
      src: __src,
      api: path.join(__src, 'api'),
      assets: __assets,
      components: path.join(__src, 'components'),
      config: path.join(__src, 'config'),
      helpers: path.join(__src, 'helpers'),
      icons: __icons,
      layouts: path.join(__src, 'layouts'),
      modules: path.join(__src, 'modules'),
      reducers: path.join(__src, 'reducers'),
      routes: path.join(__src, 'routes'),
      store: path.join(__src, 'store'),
      styles: path.join(__src, 'styles'),
    },
  },
  resolveLoader: { fallback: __node_modules },
  eslint: {
    configFile: path.join(__root, 'config/eslint/.dev.rc')
  },
  postcss: () => [autoprefixer],
};

// Temp aliases due to npm link / webpack external behavior
config.resolve.alias.react = path.join(__node_modules, 'react');
config.resolve.alias['react-dom'] = path.join(__node_modules, 'react-dom');

if (globals.__DEV__) {
  config.devtool = 'eval';
}

if (globals.__PROD__) {
  config.plugins = config.plugins.concat([
    new LodashModuleReplacementPlugin({
      'collections': true,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ]);
}

module.exports = config;
