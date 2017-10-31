/* eslint comma-dangle:0  import/no-extraneous-dependencies:0 */
const fs = require('fs-extra')
const webpack = require('webpack')
const debug = require('debug')('app:build:compile')
const webpackConfig = require('../config/webpack.config')
const project = require('../config/project.config')

const webpackCompiler = (config) => (
  new Promise((resolve, reject) => {
    const compiler = webpack(config)
    compiler.run((err, stats) => {
      if (err) {
        debug('Webpack compiler encountered a fatal error.', err)
        return reject(err)
      }

      const jsonStats = stats.toJson()
      debug('Webpack compile completed')
      debug(stats.toString(project.COMPILER_STATS))

      if (jsonStats.errors.length > 0) {
        debug('Webpack compiler encountered errors.')
        debug(jsonStats.errors.join('\n'))
        return reject(new Error(jsonStats))
      } else if (jsonStats.warnings.length > 0) {
        debug('Webpack compiler encountered warning')
        debug(jsonStats.warnings.join('\n'))
      } else {
        debug('No errors or warnings were encountered.')
      }
      return resolve(jsonStats)
    })
  })
)

const compile = () => {
  debug('Starting compiler')
  return Promise.resolve()
    .then(() => webpackCompiler(webpackConfig))
    .then((stats) => {
      if (stats.warnings.length && project.COMPILER_FAIL_ON_WARNING) {
        throw new Error('Config set to fail on warnings, existing with status code "1".'); //eslint-disable-line
      }
      debug('Copying static files to dist folder')
      fs.copySync(project.paths.assets(), project.paths.dist())
    })
    .then(() => {
      debug('Compilations completed successfully')
      process.exit(0)
    })
    .catch((err) => {
      debug('Compiler encountered an error', err)
      process.exit(1)
    })
}

compile()
