const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = (env) => {
  return {
    entry: {
      styles: `./src/styles/styles.scss`,      
      scripts: './src/ts/index.ts',
    },
    output: {
      path: path.resolve(__dirname, `dist`),
      filename: '[name].min.js',
      assetModuleFilename: 'images/[hash][ext][query]'
    },
    mode: 'production',
    devtool: 'source-map',
    watch: true,
    stats: {
      warnings: false,
      cachedModules: false,
      groupModulesByCacheStatus: false
    },
    cache: {
      type: 'filesystem',
      cacheDirectory: path.resolve(__dirname, '.temp_cache'),
      compression: 'gzip',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules\/(?!monaco-editor)/
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['node_modules']
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].min.css'
      }),
      new MonacoWebpackPlugin({
        languages: ['typescript', 'javascript']
      })
    ],
    resolve: {
      extensions: ['.ts', '.js', '.css', '.scss'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        'node_modules'
      ]
    }
  };
};