/**
 * webpack 配置
 */

var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var mkdirp = require('mkdirp')

var _package = require('./package.json')


function build_module() {

    var components_path = path.resolve(__dirname, './dev/js/components')
    fs.readdir(components_path, function(err, files) {
        if (err) throw err
        
        
        files.filter(function(file) {
            return fs.statSync(path.join(components_path, file)).isDirectory()
        }).forEach(function(file_name) {
            if('dater' === file_name){
                console.log(file_name)
                multi_build(file_name,components_path)    
            }
        })
    })

}
build_module()

var touch = function (filePath) {
  mkdirp(filePath, function () {
    fs.open(filePath + '/style.css', 'w', function (err) {})
  })
}

function filter_entry(file_path) {
    console.log(file_path)
    return new Promise(function (resolve,reject) {
        fs.readFile(file_path,function (err,data) {
            if(err) reject(err)

            // var modules = data.toString().replace(/\s/g,'').match(/export\{(.+)\}/)[1].split(',')
            var modules = data.toString().replace(/export\s*\{[\s\S]*\}/gm,'').replace(/import/g,'').replace(/from/g,':').replace(/'/g,'').match(/(.+)\s/g)
            resolve(modules)
        })
    })
}
function multi_build(file_name,components_path) {
    var file_path = components_path+'/'+file_name+'/index.js'
    filter_entry(file_path)
        .then(function (modules) {
            console.log(modules)
            modules.forEach(function (module) {
                var pair = module.split(':')
                var name = pair[0].trim()
                var file_path = path.resolve(components_path+'/'+file_name, pair[1].trim())
                build(pair[0].trim(),file_path)
            })
            // build(file_name,components_path)
        },function (err) {
            new Error(err)
        })
}

function build (name,file_path) {
    
    config.output.libraryTarget = 'umd'
    config.entry = {}
    config.entry[name] = [path.resolve(__dirname, file_path)]
    // config.output.library = converName(name)
    config.output.path = path.resolve(__dirname, './dist/components/' + name.toLowerCase() + '/')

    touch(config.output.path)
    // console.log(config)
    // path || `../src/components/${name}/index`
    webpack(config, function (err, stats) {
        var jsonStats = stats.toJson()
        var assets = jsonStats.assets[0]
        // var offset = Math.round((new Date().getTime() - _start) / 1000)
        // var index = ++number
        // console.log(`[${index < 10 ? ('0' + index) : index}]  `, addWhiteSpace(`${offset}s`, 10), addWhiteSpace('umd ' + _name, 25), `${(_name, assets.size / 1024).toFixed(2)}k`)
        if (err) {
          throw err
        }
      })
}


var config = {
    entry: {},
    output: {
      path: path.resolve(__dirname, '../dist/components/'),
      libraryTarget : 'umd',
      filename: 'index.js'
    },
    // resolve: {
    //   extensions: ['', '.js', '.vue'],
    //   alias: {
    //     'src': path.resolve(__dirname, '../src')
    //   }
    // },
    // resolveLoader: {
    //   root: path.join(__dirname, 'node_modules')
    // },
    module: {
      loaders: [{
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.json$/,
        loader: 'json'
      }, 
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'url',
      //   query: {
      //     limit: 10000,
      //     name: '[name].[ext]?[hash:7]'
      //   }
      // }
       {   test: /\.(png|jpg|svg)$/,
            loader: 'url-loader?limit=1'},
        {   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'},
        {   test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'},
        {   test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'},

        {   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'},
        {   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'}
      ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    vue: {
      loaders: {
          css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader'),
          scss: ExtractTextPlugin.extract('vue-style-loader','css-loader!ks-autobem-loader?type=css!sass-loader'),
          sass: ExtractTextPlugin.extract('vue-style-loader','css-loader!ks-autobem-loader?type=css!sass-loader'),
          html: 'vue-html-loader!ks-autobem-loader?type=html'
        // js: 'babel',
        // css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
        // less: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'less'])),
        // sass: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'sass'])),
        // stylus: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'stylus']))
      }
    },
    eslint: {
      // formatter: require('eslint-friendly-formatter')
    },
    plugins: [
        
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('style.css'),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
    ]
}





// console.log(process.env.NODE_ENV)

// module.exports = {
//     entry: {
//         app: __dirname + '/dev/js/app.js',
//         vuecore: __dirname + '/dev/js/vuecore.js'
//     },
//     output: {
//         path: __dirname + '/dist',
//         filename:'[name].js',
//         chunkFilename: '[name].[chunkhash:8].js',
//         publicPath: './dist/'
//     },
//     module: {
//         preLoaders: [
//             // {test: /\.vue$/, loader: "eslint", exclude: /node_modules/},
//             // {test: /\.js$/, loader: "eslint", exclude: /node_modules/}
//         ],
//         loaders: [

//             // {   test: /\.scss$/,
//             //     loader: ExtractTextPlugin.extract('css!sass-loader-once') },
//             {   test: /\.scss$/,
//                 loader: ExtractTextPlugin.extract('css-loader!ks-autobem-loader?type=css!sass-loader') },
//             {   test: /\.(tpl|html)$/,
//                 loader: 'html'},
//             {   test: /\.vue$/,
//                 loader: 'vue'},
//             {   test: /\.js$/,
//                 exclude: /(.\.min\.js)|node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
//                 loader: 'babel'},

//             // {test: /\.(js|tag)$/, exclude: /node_modules/, loader: 'babel-loader'},
//             {   test: /\.(png|jpg|svg)$/,
//                 loader: 'url-loader?limit=1'},
//             {   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//                 loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'},
//             {   test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
//                 loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'},
//             {   test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
//                 loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'},

//             {   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
//                 loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'},
//             {   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
//                 loader: 'file-loader-path?limit=1&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'}
//         ]
//     },

//     // scssRoot: './dev/sass/*.scss',
//     // sassResources: './dev/sass/base/*.scss',
//     babel: {
//         presets: ['es2015'],
//         plugins: ['transform-runtime']
//     },
//     eslint: {
//         configFile: __dirname+'/.eslintrc',
//         formatter: require('eslint-friendly-formatter')
//     },
//     plugins: [
//         new ExtractTextPlugin('app.css'),
//         new CleanWebpackPlugin(['dist'], {
//             root: __dirname,
//             verbose: true,
//             dry: false
//         }),
//         new webpack.DefinePlugin({
//             'APP_ENV': JSON.stringify(process.env.NODE_ENV),
//             'APP_VERSION':JSON.stringify(_package.version)
//         }),
//         new webpack.ProvidePlugin({
//             'Vue':'vue',
//             'VueResource':'vue-resource'
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//           name:'vuecore',
//           filename:'vuecore.js'
//         })

//     ],
//   vue: {
//     loaders: {
//       scss: 'vue-style-loader!css-loader!ks-autobem-loader?type=css!sass-loader',
//       html: 'vue-html-loader!ks-autobem-loader?type=html'
//     }
//   },
//   resolve: {
//     // extensions: ['', '.js', '.vue'],
//     alias: {
//       scss: path.join(__dirname, './dev/sass/app.scss'),
//       styleComponents: path.join(__dirname, './dev/sass/base/components')
//     }
//   },
//   devtool: process.env.NODE_ENV != 'pro' && 'source-map'
// }
