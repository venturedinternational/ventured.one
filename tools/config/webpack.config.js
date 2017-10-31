/* eslint comma-dangle:0, new-cap:0 */
/* eslint-env es6:false */
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const project = require('./project.config')
const debug = require('debug')('app:config:webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const __DEV__ = project.globals.__DEV__
const __PROD__ = project.globals.__PROD__
const __TEST__ = project.globals.__TEST__

debug('Creating webpack configurations')

// ----------------------------------
// Webpack config
// ----------------------------------
const webpackConfig = {
  name    : 'client',
  target  : 'web',
  devtool : project.COMPILER_DEVTOOL,
  resolve : {
    modules : [
      project.paths.assets(),
      project.paths.src(),
      'node_modules',
    ],
    mainFiles: ['index'],
    extensions : ['.js', '.jsx', '.json']
  },
  module : {},
}

// ----------------------------------
// Entry points
// ----------------------------------
webpackConfig.entry = {
  app     : project.paths.src('app.js'),
  vendor  : project.COMPILER_VENDORS
    .map((vendor) => project.paths.vendor(vendor)),
}

webpackConfig.output = {
  filename    : `[name].[${project.COMPILER_HASH_TYPE}].js`,
  path        : project.paths.dist(),
  publicPath  : project.COMPILER_PUBLIC_PATH,
}

// ----------------------------------
// Dev Server
// ----------------------------------
webpackConfig.devServer = {
  publicPath          : project.COMPILER_PUBLIC_PATH,
  contentBase         : project.paths.dist(),
  historyApiFallback  : true,
  quiet               : project.COMPILER_QUIET,
  noInfo              : project.COMPILER_QUIET,
  lazy                : false,
  stats               : project.COMPILER_STATS,
  port                : project.SERVER_PORT,
}
// ----------------------------------
// Externals
// ----------------------------------
webpackConfig.externals = {}
webpackConfig.externals['react/lib/ExecutionEnvironment'] = true
webpackConfig.externals['react/lib/ReactContext'] = true
webpackConfig.externals['react/addons'] = true

// hints:
// WARNING in entrypoint size limit:
webpackConfig.performance = { hints: false }

// ----------------------------------
// Plugins
// ----------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(project.globals),
  new htmlWebpackPlugin({ //eslint-disable-line
    template  : project.paths.src('index.pug'),
    favicon   : project.paths.assets('favicon.ico'),
    hash      : false,
    filename  : 'index.html',
    inject    : 'body',
    minify    : {
      collapseWhitespace    : true,
      removeComments        : true,
      removeAttributeQuotes  : true,
    },
  }),
]

if (__DEV__) {
  debug('Enabling plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new DashboardPlugin()
  )
} else if (__PROD__) {
  debug('Enabling plugins for production (UglifyJS).')
  debug(`Sentry: uploading source maps for release ${project.COMMIT_HASH}-${process.env.NODE_ENV}`)

  webpackConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize  : true,
      debug     : false,
      options: {
        output: {
          sourceMapFilename: '[id][file].map',
        }
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress  : {
        warnings      : false,
        screw_ie8     : true, // best option ever!
        conditionals  : true,
        unused        : true,
        comparisons   : true,
        sequences     : true,
        evaluate      : true,
        if_return     : true,
        join_vars     : true,
        dead_code     : true,
      },
      sourceMap       : true,
      output          : { comments: false }
    })
  )
}

if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] })
  )
}

// ----------------------------------
// Pug Loader
// ----------------------------------
webpackConfig.module.rules = [{
  test    : /\.pug$/,
  loader  : 'pug-html-loader',
  options   : {
    data: { version: project.VERSION, commit: project.COMMIT_HASH.substr(0, 7) }
  }
}]

// ----------------------------------
// Javascript & JSX Loaders
// ----------------------------------
webpackConfig.module.rules.push({
  test    : /\.(js|jsx)$/,
  exclude : /node_modules/,
  use: [{
    loader: 'babel-loader',
    query: {
      cacheDirectory: true,
      plugins: [
        'babel-plugin-transform-class-properties',
        'babel-plugin-syntax-dynamic-import',
        [
          'babel-plugin-transform-runtime',
          {
            helpers: true,
            polyfill: false, // we polyfill needed features in src/normalize.js
            regenerator: true,
          },
        ],
        [
          'babel-plugin-transform-object-rest-spread',
          {
            useBuiltIns: true // we polyfill Object.assign in src/normalize.js
          },
        ],
      ],
      presets: [
        'babel-preset-react',
        ['babel-preset-env', {
          modules: false,
          targets: {
            ie9: true,
          },
          uglify: true,
        }],
      ]
    },
  }],
})

// ----------------------------------
// Style Loaders
// ----------------------------------
const BASE_CSS_LOADER = {
  loader  : 'css-loader',
  options : {
    root : project.paths.src('styles'),
    modules: false,
    importLoaders : 2,
  }
}

webpackConfig.module.rules.push({
  test    : /\.scss$/,
  use     : [
    'style-loader',
    BASE_CSS_LOADER,
    'postcss-loader',
    {
      loader  : 'sass-loader',
    },
  ],
})

webpackConfig.module.rules.push({
  test  : /\.css$/,
  use   : [
    'style-loader',
    BASE_CSS_LOADER,
    'postcss-loader',
  ]
})

// ----------------------------------
// SVG Loaders for SVG in js/jsx files only
// ----------------------------------
webpackConfig.module.rules.push({
  test: /\.svg$/,
  exclude: /node_modules/,
  loaders: [
    {
      loader: 'babel-loader'
    },
    {
      loader: 'react-svg-loader',
      query: {
        jsx: true,
        svgo: {
          plugins: [{ removeTitle: false }],
          floatPrecision: 2
        }
      }
    }
  ]
})

// ----------------------------------
// File Loaders
// ----------------------------------
/* eslint-disable */
webpackConfig.module.rules.push(
  {
    test: /\.woff(\?.*)?$/,
    exclude: /node_modules/,
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff',
  },
  {
    test: /\.woff2(\?.*)?$/,
    exclude: /node_modules/,
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2',
  },
  {
    test: /\.otf(\?.*)?$/,
    exclude: /node_modules/,
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype',
  },
  {
    test: /\.ttf(\?.*)?$/,
    exclude: /node_modules/,
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.eot(\?.*)?$/,
    exclude: /node_modules/,
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]'
  },
  // {
  //   // normal svg loader comes here
  //   // we still might need these codes in the future
  //   test: /\.svg(\?.*)?$/,
  //   exclude: /node_modules/,
  //   loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
  // },
  {
    test: /\.(png|jpg)$/,
    exclude: /node_modules/,
    loader: 'file-loader?prefix=images/&name=[path][name].[ext]&limit=8192'
  }
)
/* eslint-enable */

// ----------------------------------
// Final configurations
// ----------------------------------
if (!__DEV__) {
  debug('Applying ExtractTextPlugin to CSS loaders')
  webpackConfig.module.rules.filter(
    (rule) => {
      const bool = rule.use && rule.use.find((name) => {
        if (Object.prototype.toString.call(name) === '[object Object]') {
            name = name.loader; //eslint-disable-line
        }
        return /css-loader/.test(name.split('?')[0])
      })
      return bool
    }
  ).forEach(
    (rule) => {
      const loaders = []
      rule.use.forEach((use) => {
        Object.prototype.toString.call(use) === '[object Object]' //eslint-disable-line
          ? loaders.push(use.loader)
          : loaders.push(use)
      })
      const first = loaders[0]
      const rest = loaders.slice(1)

      rule.loader = extractTextPlugin.extract({ //eslint-disable-line
        fallback  : first,
        use       : rest.join('!'),
      })

      delete rule.use; //eslint-disable-line
    })
}

webpackConfig.plugins.push(
  new extractTextPlugin({
    filename  : '[name].[contenthash].css',
    disable: __DEV__ || __TEST__,
    allChunks : true
  })
)

module.exports = webpackConfig
