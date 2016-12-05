/**
 * @description 开发服务器
 * @author: pkeros.
 * @date: 2016/10/18.
 */

var fs = require('fs')
var path = require('path')
var cssnano = require('cssnano')
var readline = require('readline')
var webpack = require('webpack')
var webpack_merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var BrowserSync = require('browser-sync-webpack-plugin')
var HtmlWebpackPlguin = require('html-webpack-plugin')

module.exports = function (config,_package) {
    var rl = readline.createInterface(process.stdin,process.stdout)
    var append_config = {
        watch: true,
        output: {
            chunkFilename: '[name].[chunkhash:8].js',
            publicPath: './dist/'
        },
        module: {
            loaders: [
                {  
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('css-loader!ks-autobem-loader?type=css!sass-loader')
                }
            ]
        },
        vue: {
            loaders: {
                scss: 'vue-style-loader!css-loader!ks-autobem-loader?type=css!sass-loader',
                html: 'vue-html-loader!ks-autobem-loader?type=html'
            }
        },
        eslint: {
            configFile: path.resolve(__dirname , '../.eslintrc'),
            formatter: require('eslint-friendly-formatter')
        },
        plugins: [
            new ExtractTextPlugin('app.css'),
            new webpack.ProgressPlugin(function (percentage, msg) {
                var progress = Math.ceil(percentage * 100)
                rl.setPrompt('进度：' + ('>'.repeat(progress/2)) + ('-'.repeat(50-progress/2)) +'\n      '+ progress + '%  ' + msg +'\n')
                rl.prompt()
                if(progress == 100 && false) {
                    process.nextTick(()=>process.exit(0))
                }
            }),
            new webpack.DefinePlugin({
                'APP_ENV': JSON.stringify(process.env.NODE_ENV),
                'APP_VERSION': JSON.stringify(_package.version)
            }),
            new webpack.ProvidePlugin({
                'Vue': 'vue',
                'VueResource': 'vue-resource'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vuecore',
                filename: 'vuecore.js'
            }),
            new BrowserSync({
              host: 'localhost',
              port: 8077,
              server: {
                baseDir: path.join(__dirname, '../'),
                index: 'index.html',
              },
            }),
            // new webpack.ProgressPlugin(function (percentage, msg) {
            //   console.log('进度：' + Math.round(percentage * 100) + '% ---> ' + msg)
            // }),
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //       warnings: false
            //     }
            // })，
            // new HtmlWebpackPlguin({
            //   inject: true
            // })
            
        ],
        resolve: {
            // extensions: ['', '.js', '.vue'],
            alias: {
                scss: path.resolve(__dirname, '../dev/sass/app.scss'),
                styleComponents: path.resolve(__dirname, '../dev/sass/base/components')
            }
        },
        devtool: process.env.NODE_ENV != 'pro' && 'source-map'

      }
    
      config = webpack_merge.smart(config, append_config)

      webpack(config, function (err, status) {
        if (err) throw err
        process.stdout.write(status.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n')
      })

}



