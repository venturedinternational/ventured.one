export default (store) => ({
  path : 'terms-and-conditions',
  getComponent (nextState, cb) {
    Promise
      .all([
        import('./TermsPage'),
      ])
      .then(([ component ]) => cb(null, component.default))
      .catch(err => cb(err))
  }
})
