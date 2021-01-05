
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const VConsolePlugin = require('vconsole-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'
const isDebug = process.env.VUE_APP_DEBUG === 'enable'

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
    if (isDebug) {
      config.plugins.push(
        new VConsolePlugin({
          enable: true
        })
      )
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/styles/_variables.scss";
        @import "@/styles/_mixins.scss";
        @import "@/styles/_functions.scss";
        `
      }
    }
  }
}
