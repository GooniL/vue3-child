const packageName = require('./package.json').name

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    }
  }
}
    