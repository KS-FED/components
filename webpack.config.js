/**
 * webpack 配置
 */
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports =  {
    entry: {
        css: __dirname + '/dev/sass/app.scss',
        app: __dirname + '/dev/js/app.js',
        vuecore: __dirname + '/dev/js/vuecore.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        preLoaders: [
            // {test: /\.vue$/, loader: "eslint", exclude: /node_modules/},
            // {test: /\.js$/, loader: "eslint", exclude: /node_modules/}
        ],
        loaders: [
            {
                test: /\.scss$/,
                loader: 'css-loader!sass-loader'
            },
            {
                test: /\.(tpl|html)$/,
                loader: 'html'
            }, {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.js$/,
                exclude: /(.\.min\.js)|node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'
            }, {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=1'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=../[name].[ext]?[hash:8]'
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=../[name].[ext]?[hash:8]'
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=../[name].[ext]?[hash:8]'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=../[name].[ext]?[hash:8]'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=../[name].[ext]?[hash:8]'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin('app.css'),
        new webpack.optimize.DedupePlugin()
    ]
}
