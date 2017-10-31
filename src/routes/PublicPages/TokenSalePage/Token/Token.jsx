import React, { Component } from 'react'

import VentureCoin from 'icons/VentureCoin'
import Countdown from 'components/Countdown'
import PresaleSignup from '../PresaleSignup'
import config from 'client.config'

import './Token.scss'

export default () => (
  <div className='landing-section token-ico-preview'>
    <div className='container center'>
      <VentureCoin className='ventures-coin-graph' />
      <div className='title-container center'>
        <div className='title'>
          VentureCoin(VCN) CrowdSale in
        </div>
        <div className='countdown-clock'>
          <Countdown
            endDate={new Date(`${config.ICOTime}`).getTime()}
          />
        </div>
        <div className='subtitle'>
          Our vision is a world where individuals are empowered with the freedom to choose the work best suited for them. And a world where the most inspired ventures thrive because people can easily support them with their talents and resources.
        </div>
        <div className='title presale'>
          There is a Presale starting 72 hours before the ICO
        </div>
        <PresaleSignup />
      </div>
    </div>
  </div>
)
