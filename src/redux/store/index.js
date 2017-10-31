import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import { browserHistory } from 'react-router'

import makeRootReducer from 'redux/reducers'
import { updateLocation } from 'redux/reducers/location'

import commonMiddleware from './middleware.common'

const createStore = (initialState = {}) => {
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(
        ...commonMiddleware
      ),
      ...enhancers
    )
  )
  store.asyncReducers = {}
  store.asyncSagas = {}
  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))
  store.runSaga = (saga) => commonMiddleware[0].run(saga)

  if (module.hot) {
    module.hot.accept('redux/reducers', () => {
      const reducers = require('redux/reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

export default createStore
