const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: '@harveyjing/common-components',
    libraryTarget: 'umd',
    globalObject: 'this',
    publicPath: '',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.(svg|jpg)$/,
        type: "asset/inline",
      },
    ]
  },
}
