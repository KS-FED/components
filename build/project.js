var fs = require('fs')
var path = require('path')
var cssnano = require('cssnano')
var readline = require('readline')
var webpack = require('webpack')
var webpack_merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpackConfig = require('../webpack.config')
var _package = require('../package.json')

// console.log(process.getuid() , process.pid)
var rl = readline.createInterface(process.stdin,process.stdout)
var config = webpack_merge.smart(webpackConfig, {
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
            
            new webpack.ProgressPlugin(function (percentage, msg) {
                var progress = Math.ceil(percentage * 100)
                rl.setPrompt('进度：' + ('>'.repeat(progress/2)) + ('-'.repeat(50-progress/2)) +'\n      '+ progress + '%  ' + msg +'\n')
                rl.prompt()
                if(progress == 100 ) {
                    // process.nextTick(()=>process.exit(0))
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
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                  warnings: false
                }
            })
        ],
        resolve: {
            // extensions: ['', '.js', '.vue'],
            alias: {
                styleComponents: path.resolve(__dirname, '../dev/sass/base/components')
            }
        },
        devtool: process.env.NODE_ENV != 'pro' && 'source-map'
    })

// console.log(config)

webpack(config, function (err, status) {
    if (err) throw err

    // return
    // console.log('callback',process.getuid() , process.pid)
    var output_path_css = path.resolve(__dirname, '../dist/app.css')
    read_file(output_path_css)
        .then((data)=>{
            return cssnano.process(data.toString(), {zindex: false})
        }).then((result)=>{
            fs.writeFileSync(output_path_css, result.css)

            process.stdout.write(status.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n')
            console.log('[app.css] size   '+(result.css.length/1024).toFixed(2)+' kB')
            
        }).catch((e)=>{
            console.log(new Error(e))
        })
    
})


// 读取文件，返回内容
function read_file(file_path){
    return new Promise(function (resolve,reject) {
        fs.readFile(file_path,function (err,data) {
            if(err) reject(err)

            resolve(data)
        })
    })
}