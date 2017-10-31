import React from 'react'

import './NewsLogoList.scss'

const logoList = [
  'images/newsLogos/eea.png',
  'images/newsLogos/medium.png',
  'images/newsLogos/bitcointalk.png',
  'images/newsLogos/steemit.png',
  'images/newsLogos/reddit.png'
]

export default class NewsLogoList extends React.Component {
  renderLogos () {
    return logoList.map((logo, id) => {
      console.log(logo)
      return (<div className='col newsLogo' key={id}>
        <img src={logo} />
      </div>)
    })
  }
  render () {
    return (<div className='row newslist-logo-container' style={{ 'margin': '0px auto 100px' }}>
      { this.renderLogos() }
    </div>)
  }
}

