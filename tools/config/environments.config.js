/**
 * Exports environment related configurations
 * configuration overrides based on execution environment
 * the base configuration will apply your overrides before exporting itself
 * @type {Object}
 * @config {CAPITAL_CASE}
 * @return {Object} webpack build configuration object
 */
module.exports = {

  /**
   * Overrides when NODE_ENV === 'development'
   * @param  {Object}       accepts a config object(project.config.jsx)
   * @return {Object}       webpack dev build configuration object
   */
  development: () => ({
    COMPILER_PUBLIC_PATH: '/',
    COMPILER_DEVTOOL: 'eval',
  }),

  /**
   * Overrides when NODE_ENV === 'production'
   * @param  {Object}       accepts a config object(project.config.jsx)
   * @return {Object}        webpack prod build configuration object
   */
  production: () => ({
    COMPILER_PUBLIC_PATH      : '/',
    COMPILER_FAIL_ON_WARNING  : false,
    COMPILER_HASH_TYPE        : 'chunkhash',
    COMPILER_DEVTOOL          : 'source-map',
    COMPILER_STATS            : {
      chunks        : true,
      chunkModules  : true,
      colors        : true,
    },
  }),
}
