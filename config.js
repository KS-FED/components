// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    port: 8088,
    proxyTable: {
      //'/auth': 'http://auth.local.kashuo.net/'
       // '/auth': '192.168.17.28:8080'
      // '/auth': 'http://localhost:8081'
    }
  }
}
