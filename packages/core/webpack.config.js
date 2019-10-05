const path = require('path');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

const paths = {
  src: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src', 'index.js'),
  dist: path.resolve(__dirname, 'dist'),
};

const config = {
  common: {
    stats: 'minimal',

    output: {
      path: paths.dist,
      publicPath: '/',
      devtoolModuleFilenameTemplate: (info) =>
        path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },

    plugins: [new Dotenv(), new CleanWebpackPlugin()],

    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all',
        maxAsyncRequests: 20, // NOTE: assumes http2
        maxInitialRequests: 20, // NOTE: assumes http2
        maxSize: 244000,
      },
    },

    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          test: /\.m?js$/,
          include: paths.src,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },

    resolve: {
      cacheWithContext: false,
    },

    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },
  },
  development: {
    mode: 'development',

    devtool: 'cheap-module-source-map',

    bail: false,

    watch: true,

    entry: [paths.entry],

    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      pathinfo: false,
    },
  },
  production: {
    mode: 'production',

    devtool: 'source-map',

    bail: true,

    entry: paths.entry,

    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].chunk.js',
    },

    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
          cache: true,
          sourceMap: true,
        }),
      ],
    },
  },
};

module.exports = merge(config.common, config[env]);
