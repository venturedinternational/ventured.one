export default (store) => ({
  path : 'news',
  getComponent (nextState, cb) {
    Promise
      .all([
        import('./NewsPage'),
      ])
      .then(([ component ]) => cb(null, component.default))
      .catch(err => cb(err))
  }
})
