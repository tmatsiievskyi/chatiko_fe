const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

const ROOT_DIR = path.join(__dirname, '..');
const ENTRY_DIR = path.join(__dirname, '..', 'src');
const BUILD_DIR = path.join(__dirname, '..', 'build');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const STATIC_DIR = path.resolve(__dirname, '..', 'static');

module.exports = (envVars) => {
  const { env } = envVars;
  return {
    entry: path.join(ENTRY_DIR, 'index.tsx'),
    output: {
      path: BUILD_DIR,
      filename: '[name].[contenthash].js',
      assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [
        new TsconfigPathsWebpackPlugin({
          configFile: path.resolve(ROOT_DIR, './tsconfig.json'),
          extensions: ['.ts', '.tsx', '.js'],
          logLevel: 'INFO',
          baseUrl: path.resolve(ROOT_DIR),
          mainFields: ['browser', 'main'],
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: path.join('icons', '[name].[contenthash][ext]'),
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(PUBLIC_DIR, 'index.html'),
      }),
      new Dotenv({
        path: path.join(ROOT_DIR, `.env.${env}`),
      }),
      new FileManagerPlugin({
        events: {
          onStart: {
            delete: [BUILD_DIR],
          },
          onEnd: {
            copy: [
              {
                source: STATIC_DIR,
                destination: BUILD_DIR,
              },
            ],
          },
        },
      }),
    ],
  };
};
