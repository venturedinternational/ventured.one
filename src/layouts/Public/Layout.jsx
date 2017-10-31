import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Layout } from 'antd'
import Header from './Header'
import Footer from './Footer'
import './Layout.scss'

const { Content } = Layout

class PublicLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render () {
    return (
      <div className='public-layout'>
        <Header />
        <Content>
          {this.props.children}
        </Content>
        <Footer />
      </div>
    )
  }
}

export default PublicLayout
