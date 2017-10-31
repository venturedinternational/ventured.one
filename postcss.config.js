module.exports = {
  plugins: [
    require('cssnano')({ //eslint-disable-line
      autoprefixer  : {
        add       : true,
        remove    : false,
        browsers  : 'last 2 versions, Safari 9.1, not ie > 0',
      },
      discardComments : { removeAll : true },
      discardUnused   : false,
      mergeIdents     : false,
      reduceIdents    : false,
      safe            : true,
      sourcemap       : true,
    }),
  ],
  sourcemap: 'inline',
}
