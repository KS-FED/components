/**
 * @description 开发服务器
 * @author: pkeros.
 * @date: 2016/10/18.
 */
var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');

var webpackConfig = require('../webpack.config');
var BrowserSync = require('browser-sync-webpack-plugin');
var HtmlWebpackPlguin = require('html-webpack-plugin');

var mixinWebpackConfig = merge.smart(webpackConfig, {
  watch: true,
  plugins: [
    new BrowserSync({
      host: 'localhost',
      port: 8077,
      server: {
        baseDir: path.join(__dirname, '../'),
        index: 'index.html',
      }
    }),
    new webpack.optimize.CommonsChunkPlugin(
      { name: 'vueCore', filename: 'vueCore.js' }
    ),
    // new webpack.ProgressPlugin(function (percentage, msg) {
    //   console.log('进度：' + Math.round(percentage * 100) + '% ---> ' + msg)
    // }),
    new HtmlWebpackPlguin({
      inject: true
    })
  ],
  loaders: [
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000
      }
    }
  ],
  vue: {
    loaders: {
      scss: 'vue-style-loader!css-loader!ks-autobem-loader?type=css!sass-loader'
    }
  }
})

webpack(mixinWebpackConfig, function (err, status) {
  if (err) throw err
  process.stdout.write(status.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
