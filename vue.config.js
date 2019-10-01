const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin('./src/assets/logo.png')
    ]
  }
}