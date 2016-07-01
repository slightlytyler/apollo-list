const path = require('path');
const devConfig = require('./dev');

const __root = path.join(__dirname, '../../');

module.exports = {
  devtool: 'inline-source-maps',
  module: {
    noParse: [
      /node_modules(\\|\/)sinon/
    ],
    preLoaders: devConfig.module.preLoaders,
    loaders: [
      devConfig.module.loaders[0], // js loader
      {
        test: /\.json$/,
        loader: 'json',
      }
    ]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  resolve: {
    alias: Object.assign({ sinon: 'sinon/pkg/sinon' }, devConfig.resolve.alias)
  },
  eslint: {
    configFile: path.join(__root, 'config/eslint/.test.rc')
  },
}