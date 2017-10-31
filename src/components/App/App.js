import React, { Component } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }
  render () {
    return (
      <LocaleProvider locale={enUS}>
        <Provider store={this.props.store}>
          <Router
            onUpdate={() => window.scrollTo(0, 0)}
            history={browserHistory}
            children={this.props.routes}
          />
        </Provider>
      </LocaleProvider>
    )
  }
}

export default App
