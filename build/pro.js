//
// 项目编译发布脚本
//

var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpackConfig = require('../webpack.config');

/**
 * @description 运行 webpack
 * @param config 配置信息
 */
function runWebpack(config) {
  webpack(config, function (err, status) {
    if (err) throw err
    process.stdout.write(status.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n')
  });
}

// 打包权限控制脚本
process.stdout.write('打包 AuthKit 脚本文件...\n\n');
runWebpack({
  watch: true,
  entry: {
    authKit: __dirname + '/../dev/authKit/authKit2.js'
  },

  output: {
    path: __dirname + '/../dist',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },

  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname + '/../',
      verbose: true,
      dry: false
    })
  ]
});

// 打包项目文件
process.stdout.write('打包项目文件...\n\n');
runWebpack(webpackConfig);
