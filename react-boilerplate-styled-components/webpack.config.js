const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // App entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Build output folder
    filename: 'app_bundle.js' // Build bundle file name
  },
  module: { // support for files other than old JS and JSON, which are supported by default
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // handle js files to be converted to es5
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/, // keeping for type-checking, handle ts files to be converted to es5
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // attempt to resolve this files in order if multiple files share the same name
    alias: {
      Components: path.resolve(__dirname, 'src/components/'), // now we can import 'Components/App' instead of src/components/App
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Constants: path.resolve(__dirname, 'src/constants')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // use this file when creating a bundle
    })
  ]
}
