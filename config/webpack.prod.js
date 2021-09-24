const { merge } = require('webpack-merge');

const commomConfig = require('./webpack.common');
const prodConfig = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
};

module.exports = merge(commomConfig, prodConfig);
