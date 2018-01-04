import React from 'react'

import EEALogo from './EEALogo'
// import CreditKarmaLogo from './CreditKarmaLogo'

import './EEA.scss'

export default () => (
  <div className='landing-section partners-section'>
    <div className='container center'>
      <div className='partners-container'>
        <EEALogo className='eea-logo' />
      </div>
      <div className='title-container center'>
        <div className='eea-title'>
          We are proud to join Enterprise Ethereum Alliance on July 18, 2017 <a href='https://entethalliance.org/enterprise-ethereum-alliance-becomes-worlds-largest-open-source-blockchain-initiative/' target='_blank'><i className='fa fa-newspaper-o'></i></a>
        </div>
        <div className='eea-text'>
          Ethereum allows us to democratize technology in a way that was previously impossible. Ventured is capitalizing on this new technology trend in order to bring together ideas and talent seamlessly. We are excited to partner with the Enterprise Ethereum Alliance to help the world work better together. 
        </div>
        <br />
        <div style={{ 'font-align': 'right' }}>– Frank Niu, CEO & founder of Ventured International</div>
      </div>
    </div>
  </div>
)

// We are proud to join Enterprise Ethereum Alliance on July 18, 2017. <a href='https://entethalliance.org/enterprise-ethereum-alliance-becomes-worlds-largest-open-source-blockchain-initiative/' target='_blank'>Announcement Here</a>
// Ethereum allows us to democratize technology in a way that was previously impossible. Ventured is capitalizing on this new technology trend in order to bring together ideas and talent seamlessly. We are excited to partner with the Enterprise Ethereum Alliance to help the world work better together.

{/* <EEALogo className='eea-logo' /> */}