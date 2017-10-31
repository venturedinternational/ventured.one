import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

import { Button } from 'antd'

import VenturedLogo from 'icons/VenturedLogo'

import './Header.scss'

class Header extends Component {
  render () {
    return (
      <div className='public-header'>
        <div className='nav-container left'>
          <Link className='nav-item' to='/'>
            <span className='hide-sm'>What is </span>Ventured
          </Link>
          <a
            className='nav-item'
            href='https://github.com/venturednetwork/whitepaper'
            target='_blank'
          >
            Whitepaper
          </a>
        </div>
        <IndexLink className='nav-container center' to='/'>
          <VenturedLogo className='header-logo' />
        </IndexLink>
        <div className='nav-container right'>
          <Link className='nav-item' to='/news'>
            <span className='hide-sm'>Latest</span> News
          </Link>
          <Link className='nav-item button' to='/tokensale'>
            <Button className='pulse' type='primary'>
              Crowdsale
            </Button>
          </Link>
          <div className='social'>
            <span className='hide-sm'>
              <a href='https://slack.ventured.one' target='_blank'>
                <span className='icon'>
                  <i className='fa fa-slack' style={{ 'transform': 'translate(1.5px, 2px)' }} />
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
