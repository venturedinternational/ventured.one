Changelog
=========

1.0.9
-------------

### Features
* Added new CompanyPage and NewsPage

### Improvements
* Simplify route file structure


1.0.2
-------------

### Features
* Added new Homepage Venture section svg graphs
* Added new Homepage Work section svg graphs

### Improvements
* Improved Particles performance specially in mobile devices
* Improved Token section timeline in mobile devices

### Fixes
* Timeline section now shows correct svg for mobile devices



0.0.1-alpha
-------------

### Features
* Implemented build boilerplate along with CSS Live loading
* Upgraded webpack to `^2.0.0` (along with all associated dependencies)
* Upgraded react to `^15.5.4`
* Upgraded react-dom to `^15.5.4`
* Upgraded react-redux to `^5.0.4`
* Upgraded redbox-react to `^5.0.4`
* Upgraded bootstrap to `^4.0.0-alpha`
* Replaced 3rd-party bootstrap import with local dependency
* Replaced `babel-preset-stage-1` and friends with `babel-preset-env`
* Added normalizer bundler for JavaScript (`Promise`, `fetch`, and `Object.assign`)
* Added `dirty-chai`

### Improvements
* Replaced PropTypes usage with `prop-types` package
* Simplified project structure and configuration
* Replaced postcss-loader usage with css-loader builtins
* Webpack manifest is now bundled separately from vendor bundle (improves caching)
* Replaced `file-loader` with `url-loader`
* Moved all build-related dependencies back to `devDependencies`
* Replaced `better-npm-run` with `cross-env`
* Cleaned up some sloppy tests

### Fixes
* `console.log` now works correctly inside of Karma
