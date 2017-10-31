import React from 'react'
import './Exchange.scss'

import EthereumExchange from './EthereumExchange'

// import EthereumCoin from 'assets/icons/EthereumCoin'

export default () => (
  <div className='landing-section buyin-details'>
    <div className='container center'>
      <div className='title-container center'>
        <div className='title'>
          1 ETH = <span className='greyout'>EthValue * 12 VCN</span>
        </div>
        <div className='subtitle'>
          You can exchange VCN with Ether (ETH).<br />
          <span className='highlight'><b>EthValue</b></span> will be determined by the price in the ICO period<br />
          <span className='highlight'>The address</span> will be announced here <span className='highlight'>24 hours</span> before the crowdsale.
        </div>
      </div>
      <EthereumExchange className='ether-vcn-graph' />
    </div>
  </div>
)
