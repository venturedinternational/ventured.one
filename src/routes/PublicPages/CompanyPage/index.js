export default (store) => ({
  path : 'company',
  getComponent (nextState, cb) {
    Promise
      .all([
        import('./CompanyPage'),
      ])
      .then(([ component ]) => cb(null, component.default))
      .catch(err => cb(err))
  }
})
