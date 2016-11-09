/**
 * webpack 配置
 */

var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var _package = require('./package.json')




// console.log(process.env.NODE_ENV)

module.exports = {
    entry: {
        app: __dirname + '/dev/js/app.js',
        vuecore: __dirname + '/dev/js/vuecore.js'
    },
    output: {
        path: __dirname + '/dist',
        filename:'[name].js',
        chunkFilename: '[name].[chunkhash:8].js',
        publicPath: './dist/'
    },
    module: {
        preLoaders: [
            // {test: /\.vue$/, loader: "eslint", exclude: /node_modules/},
            // {test: /\.js$/, loader: "eslint", exclude: /node_modules/}
        ],
        loaders: [

            // {   test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract('css!sass-loader-once') },
            {   test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!ks-autobem-loader?type=css!sass-loader') },
            {   test: /\.(tpl|html)$/,
                loader: 'html'},
            {   test: /\.vue$/,
                loader: 'vue'},
            {   test: /\.js$/,
                exclude: /(.\.min\.js)|node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'},

            // {test: /\.(js|tag)$/, exclude: /node_modules/, loader: 'babel-loader'},
            {   test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192'},
            // {   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'file-loader-path?limit=8192&name=[name].[ext]?[hash:8]&path=../[name].[ext]?[hash:8]'},
            {   test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader-path?limit=8192&name=[name].[ext]?[hash:8]&path=../[name].[ext]?[hash:8]'},
            {   test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader-path?limit=8192&name=[name].[ext]?[hash:8]&path=../[name].[ext]?[hash:8]'},

            {   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader-path?limit=8192&name=[name].[ext]?[hash:8]&path=../[name].[ext]?[hash:8]'},
            {   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader-path?limit=8192&name=[name].[ext]?[hash:8]&path=../[name].[ext]?[hash:8]'}
        ]
    },
    
    // scssRoot: './dev/sass/*.scss',
    // sassResources: './dev/sass/base/*.scss',
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    eslint: {
        configFile: __dirname+'/.eslintrc',
        formatter: require('eslint-friendly-formatter')
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            'APP_ENV': JSON.stringify(process.env.NODE_ENV),
            'APP_VERSION':JSON.stringify(_package.version)
        }),
        new webpack.ProvidePlugin({
            'Vue':'vue',
            'VueResource':'vue-resource'
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name:'vuecore',
          filename:'vuecore.js'
        })

    ],
  vue: {
    loaders: {
      scss: 'vue-style-loader!css-loader!sass-loader',
      html: 'vue-html-loader!ks-autobem-loader?type=html'
    }
  },
  resolve: {
      // extensions: ['', '.js', '.vue'],
      alias: {
          scss: path.join(__dirname, './dev/sass/app.scss')
      }
  },
  devtool: process.env.NODE_ENV != 'pro' && 'source-map'
}
