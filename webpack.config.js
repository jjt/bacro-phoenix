module.exports = {
  entry: './web/static/js/app.js',
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/},
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    ],
  },
  output: {
    path: './priv/static/js',
    filename: 'app.js',
  },
};
