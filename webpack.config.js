path = require('path');

module.exports = {
  entry: {
    app: './web/static/js/app.js',
    front: './web/static/js/front.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: [
          path.resolve(__dirname, 'web/static/js')
        ]
      },
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader!postcss-loader'},
    ],
  },
  resolve: {
    root: path.resolve('./web/static')
  },
  output: {
    path: './priv/static/js',
    filename: '[name].bundle.js',
  },
};
