import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware()

export default [
  sagaMiddleware,
  thunkMiddleware,
]
