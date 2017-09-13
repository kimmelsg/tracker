const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './umd/index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'TrackerClient',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            [
              'env',
              {
                targets: {
                  browsers: ['ie >= 11'],
                },
              },
            ],
          ],
        },
      },
    ],
  },
  plugins: [new UglifyJSPlugin()],
};
