import React, { Component } from 'react'

import VentureCoin from 'icons/VentureCoin'
import Countdown from 'components/Countdown'
// import PresaleSignup from '../PresaleSignup'
import config from 'client.config'

import './Token.scss'

export default () => (
  <div className='landing-section token-ico-preview'>
    <div className='container center'>
      <VentureCoin className='ventures-coin-graph' />
      <div className='title-container center'>
        <div className='title'>
          VentureCoin(VCN) CrowdSale address:
          <div>Hard cap: 41,625 ETH.</div>
        </div>
        <div className='countdown-clock'>
          <Countdown
            endDate={new Date(`${config.ICOTime}`).getTime()}
          />
        </div>
        <div className='title presale'>
          <div>**DO NOT** send ether directly from exchanges such as coinbase/GDAX/Bittrex/Poliniex...</div>
          <div>Please transfer from smart contract wallet such as
            <a target='_blank' href='https://metamask.io/'> MetaMask</a> or
            <a target='_blank' href='https://www.myetherwallet.com/'> MyEtherWallet</a>
          </div>
        </div>
        {/* <PresaleSignup /> */}
      </div>
    </div>
  </div>
)
