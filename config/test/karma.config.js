const path = require('path');
const webpack = require('../webpack/test');

module.exports = config => config.set({
  frameworks: ['mocha'],
  files: ['bundle.js'],
  browsers: process.env.TRAVIS ? ['ChromeTravis'] : ['Chrome'],
  preprocessors: {
    'bundle.js': ['webpack', 'sourcemap',],
  },
  customLaunchers: {
    ChromeTravis: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  },
  reporters: ['mocha'],
  mochaReporter: {
    showDiff: true
  },
  specReporter: {
    suppressPassed: true
  },
  autoWatch: false,
  singleRun: true,
  concurrency: Infinity,
  logLevel: config.LOG_INFO,
  colors: true,
  port: 9876,
  webpack: webpack,
  webpackServer: {
    noInfo: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  },
});