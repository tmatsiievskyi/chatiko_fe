const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) =>
  merge(common(env), {
    mode: 'production',
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    optimization: {
      usedExports: false,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false,
            compress: true,
            output: {
              beautify: true,
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
  });
