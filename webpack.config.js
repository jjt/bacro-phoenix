/*eslint-disable*/
var path = require('path');
var webpack = require('webpack');

var env = process.env.MIX_ENV || 'dev';
var prod = env === 'prod';

var entry = './web/static/js/app.js';
var publicPath = 'http://localhost:4001/';

// Plugins and loaders
var loaders = ['babel'];
var plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js',
    minChunks: Infinity,
  }),
];

if (prod) {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  loaders.unshift('react-hot');
}

// Webpack config
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: prod ? entry : [
      'webpack-dev-server/client?' + publicPath,
      'webpack/hot/only-dev-server',
      entry,
    ],
    // Get all deps from package.json
    vendor: Object.keys(require('./package.json').dependencies),
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
