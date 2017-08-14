var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//分离css插件
var htmlPlugin = require('html-webpack-plugin');//生成HTML插件
const CleanWebpackPlugin = require('clean-webpack-plugin');//build前清空dist文件夹
var inlineManifestPlugin = require('inline-manifest-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // loader: 'style-loader!css-loader'
        use:ExtractTextPlugin.extract({fallback:"style-loader",use:["css-loader"]})
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  plugins:[
    new ExtractTextPlugin('style.[hash].css'),
    new htmlPlugin({
          template: './index.html'
    }),
         new inlineManifestPlugin({
          name: 'webpackManifest'
      }),
    new CleanWebpackPlugin(//每次build先清空dist文件夹，匹配删除的文件
          ['dist/main.*.js','dist/ventor.*.js','dist/style.*.css','dist/index.html'],
          {
              root: __dirname,//根目录
              verbose:  true,//开启在控制台输出信息
              dry:false //启用删除文件
          }
      )
  ],
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
