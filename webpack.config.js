const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const generateCSSScopedName = require('./build/cssScoopeGenerator')();
const libAssets = require('./build/libAssets');

const WEB_APP = path.join(__dirname, 'web/app');
const MODULES = path.join(__dirname, 'modules');
const NODE_MODULES = path.join(__dirname, 'node_modules');
const INTEGRATION_TESTS = path.join(__dirname, 'web/test');

const GLOBAL_CSS = path.join(__dirname, 'web/css');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: ['core-js/stable', 'regenerator-runtime/runtime', './web/app/index'],
    sketcher: ['core-js/stable', 'regenerator-runtime/runtime', './web/app/sketcher']
  },
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    publicPath: '/static/'
  },
  externals: {
    'verb-nurbs': 'verb'
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
    modules: [MODULES, "node_modules", WEB_APP],
    alias: {
      'react-toastify$': path.resolve(__dirname, 'node_modules/react-toastify/dist/react-toastify.esm.mjs'),
      'react-toastify/dist/index.mjs$': path.resolve(__dirname, 'node_modules/react-toastify/dist/react-toastify.esm.mjs'),
    }
  },
  devServer: {
    hot: false,
    liveReload: false,
    client: false,
    static: [
      path.join(__dirname, 'web'),
    ],
    setupMiddlewares(middlewares, devServer) {
      libAssets.forEach(asset => {
        devServer.app.get(`/lib-assets/${asset}`, function (req, res) {
          res.sendFile(path.join(NODE_MODULES, asset))
        })
      });
      return middlewares;
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        include: [MODULES, WEB_APP, INTEGRATION_TESTS]
      },
      {
        test: /\.(less|css)$/,
        include: [GLOBAL_CSS, INTEGRATION_TESTS],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              esModule: false,
            }
          },
          'less-loader',
        ]
      },
      {
        test: /\.(css)$/,
        include: [NODE_MODULES],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            }
          },
        ]
      },
      {
        oneOf: [
          {
            test: /\.(less|css)$/,
            include: [path.resolve(MODULES, 'ui/styles/global')],
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  esModule: false,
                }
              },
              'less-loader'
            ]
          },
          {
            test: /\.(less|css)$/,
            include: [MODULES, WEB_APP],
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    mode: 'local',
                    getLocalIdent: (context, localIdentName, localName) => generateCSSScopedName(localName, context.resourcePath),
                  },
                  url: false,
                  esModule: false,
                }
              },
              'less-loader'
            ]
          }
        ],
      },
      {
        test: /\.wasm$/,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        type: 'asset/source'
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset',
      },
    ]
  },
  node: {
    __dirname: true
  }
};
