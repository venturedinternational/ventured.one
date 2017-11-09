import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

import VenturedLogo from 'icons/VenturedLogo'
// import DiscordIcon fron 'Discord.svg'
import './Footer.scss'

class PublicNavigation extends Component {
  state = {
    MenuItems: []
  }

  render () {
    return (
      <div className='public-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='footer-logo'>
                <VenturedLogo />
              </div>
            </div>
            <div className='col social'>
              <a href='https://www.facebook.com/venturednetwork' target='_blank'>
                <span className='item'>
                  <i className='fa fa-facebook' style={{ 'transform': 'translate(5px, 3px)' }} />
                </span>
              </a>
              <a href='https://github.com/venturedinternational/' target='_blank'>
                <span className='item'>
                  <i className='fa fa-github-alt' style={{ 'transform': 'translate(2px, 2px)' }} />
                </span>
              </a>
              <a href='https://slack.ventured.one' target='_blank'>
                <span className='item'>
                  <i className='fa fa-slack' style={{ 'transform': 'translate(1.5px, 2px)' }} />
                </span>
              </a>
              {/*<a href='http://discord.ventured.one' target='_blank'>*/}
                {/*<span className='item'>*/}
                  {/*<DiscordIcon style={{ 'width': '20px', 'height': '100%', 'transform': 'translate(1.5px, 2px)' }} className='discord' />*/}
                {/*</span>*/}
              {/*</a>*/}
              <a href='https://www.reddit.com/r/Ventured/' target='_blank'>
                <span className='item'>
                  <i className='fa fa-reddit-alien' style={{ 'transform': 'translate(0px, 2px)' }} />
                </span>
              </a>
              <a href='https://twitter.com/venturednetwork' target='_blank'>
                <span className='item'>
                  <i className='fa fa-twitter' style={{ 'transform': 'translate(2px, 2px)' }} />
                </span>
              </a>
              {/*<a href='https://youtube.com/c/venturednetwork' target='_blank'>*/}
                {/*<span className='item'>*/}
                  {/*<i className='fa fa-youtube-play' style={{ 'transform': 'translate(1px, 2px)' }} />*/}
                {/*</span>*/}
              {/*</a>*/}
            </div>
            <div className='col'>
              <div className='link-container'>
                {/*<IndexLink className='footer-link'>Ventured</IndexLink>*/}
                {/*<Link className='footer-link' to='/tokensale'>Tokensale</Link>*/}
                <Link className='footer-link' to='/news'>News</Link>
                <Link className='footer-link' to='/company'>Company</Link>
                <a className='footer-link' href='https://angel.co/venturednetwork/jobs' target='_blank'>Careers</a>
                <a className='footer-link' href='mailto:support@ventured.one?subject=Help%20me%20out'>Help</a>
                <Link className='footer-link' to='/terms-and-conditions'><div className='item'>Legal</div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PublicNavigation
