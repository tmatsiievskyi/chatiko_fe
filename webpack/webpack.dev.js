const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const devServer = {
  historyApiFallback: true,
  open: true,
  hot: true,
  compress: true,
  allowedHosts: 'all',
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
    progress: true,
  },
  port: 3001,
};

module.exports = (env) =>
  merge(common(env), {
    mode: 'development',

    devServer,
    target: 'web',
    devtool: 'eval',
    plugins: [new ReactRefreshWebpackPlugin()],
  });
