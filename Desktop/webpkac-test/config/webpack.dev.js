const { merge } = require('webpack-merge');

const commomConfig = require('./webpack.common');
const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
};

module.exports = merge(commomConfig, devConfig);
