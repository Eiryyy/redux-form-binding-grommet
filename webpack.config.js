const { resolve } = require('path')

module.exports = {
  entry: resolve('./src/index.js'),
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  output: {
    path: resolve('./lib'),
    filename: 'index.js',
    library: 'ReduxFormBindingGrommet',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: 'react',
    grommet: 'grommet'
  }
}
