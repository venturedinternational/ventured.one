export default () => ({
  path : 'tokensale',
  getComponent (nextState, cb) {
    Promise
      .all([
        import('./TokensalePage'),
      ])
      .then(([ component ]) => cb(null, component.default))
      .catch(err => cb(err))
  }
})
