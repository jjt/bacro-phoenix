/*eslint-disable*/
var path = require('path');
var webpack = require('webpack');

var env = process.env.MIX_ENV || 'dev';
var prod = env === 'prod';

var entry = './web/static/js/app.js';
var plugins = [new webpack.NoErrorsPlugin()];
var loaders = ['babel'];
var publicPath = 'http://localhost:4001/';

if (prod) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  loaders.unshift('react-hot');
}

module.exports = {
  devtool: 'source-map',
  entry: {
    front: './web/static/js/front.js',
    app: prod ? entry : [
      'webpack-dev-server/client?' + publicPath,
      'webpack/hot/only-dev-server',
      entry,
    ],
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: loaders},
      {test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader!postcss-loader'},
    ],
  },
  plugins: plugins,
  postcss: function () {
    return [
      require('postcss-normalize'),
      require('precss'),
      require('lost'),
    ];
  },
  output: {
    path: path.join(__dirname, './priv/static/js'),
    filename: '[name].bundle.js',
    publicPath: publicPath
  },
  resolve: {
    root: path.resolve('./web/static'),
  },
};
