/**
 * 单独组件打包
 */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var cssnano = require('cssnano')
var webpack_merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var mkdirp = require('mkdirp')

module.exports = function (config) {

  // webpack({
  //       entry:[path.resolve(__dirname, '../dev/sass/base/index.scss')],
  //       output:{
  //           path:path.resolve(__dirname, '../dist/'),
  //           libraryTarget:'umd',
  //           filename: 'base.css'
  //           // library : converName(name)
  //       },
  //       module: {
  //           loaders: [{  
  //               test: /\.scss$/,
  //               loader: ExtractTextPlugin.extract('css-loader!sass-loader')
  //           }]
  //       },
  //       plugins: [
  //           new webpack.optimize.OccurenceOrderPlugin(),
  //           new ExtractTextPlugin('base.css')
  //       ]
  //   }, function (err, stats) {
  //    if (err) throw err
  // })
  // return 

  var components_path = path.resolve(__dirname, '../dev/js/components')
  
  // 读取components目录
  read_module_dir(components_path)
    .then((files)=>{
        var promise_arr = []
        files.forEach(function(file_name) {
            if('dater' === file_name || 'pager' === file_name || 'KsButton' === file_name){
                console.log(file_name)
                promise_arr.push(filter_entry(file_name,components_path))
            }
        })
        // 需要打包的模块
        return Promise.all(promise_arr)
    }).then((file_entrys)=>{
        // console.log(promise_arr)
        file_entrys.forEach((file_entry)=>{
            // console.log(file_entry)
            var file_name = file_entry.file_name
            var modules = file_entry.modules
            modules.forEach(function (module) {
                var pair = module.split(':')
                var name = pair[0].trim()
                var file_path = path.resolve(components_path+'/'+file_name, pair[1].trim())
                build(name,file_path,config)
            })
        })
    })

}




var count = 0

// 调整配置、打包
function build (name,file_path,config) {
    // console.log(file_path)
    var output_path = path.resolve(__dirname, '../dist/components/' + name.toLowerCase() + '/')
    var append_config = {
        entry:{},
        output:{
            path:output_path,
            libraryTarget:'umd',
            filename: 'index.js'
            // library : converName(name)
        },
        vue: {
          loaders: {
              css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader'),
              scss: ExtractTextPlugin.extract('vue-style-loader','css-loader!ks-autobem-loader?type=css!sass-loader'),
              sass: ExtractTextPlugin.extract('vue-style-loader','css-loader!ks-autobem-loader?type=css!sass-loader'),
              html: 'vue-html-loader!ks-autobem-loader?type=html'
          }
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                  warnings: false
                }
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new ExtractTextPlugin('style.css')
        ]
    }
    config = webpack_merge.smart(config,append_config)
    config.entry[name] = [path.resolve(__dirname, file_path)]
    // config.entry[name] = 
    
    var time_start = new Date().getTime()
    // touch(config.output.path)
    // return
    webpack(config, function (err, stats) {
        if (err) throw err
            
        // console.log(path.resolve(output_path, './style.css'))
        // return 
        read_file(path.resolve(output_path, './style.css'))
            .then((data)=>{
                return cssnano.process(data.toString(), {zindex: false})
            }).then((result)=>{
                fs.writeFileSync(path.resolve(output_path, './style.css'), result.css)
                trace_progress(stats,name,count,time_start)
            }).catch((e)=>{
                // console.log('无样式...')
                trace_progress(stats,name,count,time_start)
            })
        
      })
}


// 打印进度
function trace_progress(stats,name,count,time_start){
    var assets = stats.toJson().assets[0]
    var offset = Math.round((new Date().getTime() - time_start) / 1000)
    var index = ++count
    console.log(`[${index < 10 ? ('0' + index) : index}]  `, fill_white_space(`${offset}s`, 10), fill_white_space('umd ' + name, 25), `${(name, assets.size / 1024).toFixed(2)}k`)
}

// 查询组件目录
function read_module_dir(components_path) {
    return new Promise((resolve,reject)=>{
        fs.readdir(components_path, function(err, files) {
            if (err) reject(err)
            
            files = files.filter(function(file) {
                return fs.statSync(path.join(components_path, file)).isDirectory()
            })
            resolve(files)
        
        })
    })

}

// 过滤组件入口文件
function filter_entry(file_name,components_path) {
    var file_path = components_path+'/'+file_name+'/index.js'
    // console.log(file_path)
    return new Promise(function (resolve,reject) {
        read_file(file_path)
            .then((data)=>{
                var modules = data.toString().replace(/export\s*\{[\s\S]*\}/gm,'').replace(/import/g,'').replace(/from/g,':').replace(/'/g,'').match(/(.+)\s/g)
                console.log(modules)
                resolve({file_name,modules})
            },(err)=>{
                reject(err)
            })
        
    })
}

// 读取文件，返回内容
function read_file(file_path){
    return new Promise(function (resolve,reject) {
        fs.readFile(file_path,function (err,data) {
            if(err) reject(err)

            resolve(data)
        })
    })
}

// 创建目录
var touch = function (filePath) {
  mkdirp(filePath, function () {
    fs.open(filePath + '/style.css', 'w', function (err) {})
  })
}

// 补齐命令行中的空白
function fill_white_space (str, len) {
  return (str+' '.repeat(20)).substr(0,len)
}