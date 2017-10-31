/* eslint comma-dangle:0  import/no-extraneous-dependencies:0 */
/* eslint-env es6:false */
const path = require('path')
const childProcess = require('child_process')
const debug = require('debug')('app:config:project')
const argv = require('yargs').argv
const pkgs = require('../../package.json')
const environments = require('./environments.config')

const COMMIT_HASH = childProcess.execSync('git rev-parse HEAD')
  .toString()
  .slice(0, -1);

// ----------------------------------
// Default configurations
// ----------------------------------
const config = {
  node        : process.env.NODE_ENV || 'development',
  VERSION     : pkgs.version,
  COMMIT_HASH,

  // ----------------------------------
  // Project structure
  // ----------------------------------
  PATH_BASE   : path.resolve(__dirname, '../..'),
  DIR_SRC     : 'src',
  DIR_DIST    : 'dist',
  DIR_ASSETS  : 'assets',
  DIR_TEST    : '__tests__',
  DIR_VENDORS : 'node_modules',

  // ----------------------------------
  // Server configuration
  // ----------------------------------
  SERVER_PORT : process.env.PORT || 3000,

  // ----------------------------------
  // Compiler configuration
  // ----------------------------------
  // Required to link back to exact lines in actual JSX files,
  // which 'eval' doesn't offer
  COMPILER_DEVTOOL          : 'cheap-module-eval-source-map',
  COMPILER_HASH_TYPE        : 'hash',
  COMPILER_FAIL_ON_WARNING  : false,
  COMPILER_QUIET            : false,
  COMPILER_PUBLIC_PATH      :  '/',
  COMPILER_STATS            : {
    chunks        : false,
    chunkModules  : false,
    colors        : true,
  },

  // Add vendors that needs to be compiled here
  COMPILER_VENDORS : [
    'whatwg-fetch',
  ],

  // ----------------------------------
  // Tests configurations
  // ----------------------------------
  COVERAGE_REPORTERS : [
    { type: 'text-summary' },
    { type: 'lcov', dir: 'coverage' },
  ],
}

/** **********************************************
 -------------------------------------------------
 Internal configuration below
 Edit at your own risk!
 -------------------------------------------------
 ********************************************** **/

// ----------------------------------
// Environment configuration
// ----------------------------------
debug(`Looking for environment overrides for NODE_ENV '${config.node}'.`)
const overrides = environments[config.node]

if (overrides) {
  debug('Found environment overrides, applying to default configurations.')
  Object.assign(config, overrides())
  debug(`Using ${config.node}`)
} else {
  debug('No environment overrides found, defaults will be used.')
}

// ----------------------------------
// Environments
// ----------------------------------
config.globals = {
  'process.env'   : {
    NODE_ENV    : JSON.stringify(config.node),
  },
  COMMIT_HASH   : JSON.stringify(COMMIT_HASH),
  VERSION       : JSON.stringify(config.VERSION),
  NODE_ENV      : config.node,
  __DEV__       : config.node === 'development',
  __PROD__      : config.node === 'production',
  __TEST__      : config.node === 'test',
  __COVERAGE__  : !argv.watch && config.node === 'test',
  __BASENAME__  : JSON.stringify(process.env.BASENAME || ''),
}

// ----------------------------------
// Validate vendor dependencies
// ----------------------------------
config.COMPILER_VENDORS = config.COMPILER_VENDORS.filter((dep) => {
  if (pkgs.dependencies[dep]) return true

  debug(
    `Package ${dep} was not found as an npm dependency in package.json;
    It won't be included in the webpack vendor bundle.
    Consider removing it from 'compilerVendors' in ~/config/project.config.js
    `)
  return false
})

// ----------------------------------
// Utilities
// ----------------------------------
/* Resolve PATH_BASE, plus any arguments passed */
const base = (...args) => path.resolve(config.PATH_BASE, ...args)

config.paths = {
  base,
  src     : base.bind(null, config.DIR_SRC),
  assets  : base.bind(null, config.DIR_ASSETS),
  dist    : base.bind(null, config.DIR_DIST),
  vendor  : base.bind(null, config.DIR_VENDORS),
}

module.exports = config
