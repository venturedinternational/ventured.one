import React from 'react'
import './Work.scss'

import WorkLG from './WorkLG'
import WorkXS from './WorkXS'

export default () => (
  <div className='landing-section feature-work white'>
    <div className='container centered'>
      <div className='title-container center'>
        <div className='title'>
          People contribute funds or <br /> work to a Venture.
        </div>
        <div className='subtitle'>
          Ventures pay contributors in Token-Shares or Cryptocurrencies
          such as Bitcoin, Ether, and VentureCoin
        </div>
        <WorkLG className='supports-graph lg' />
        <WorkXS className='supports-graph xs' />
      </div>
    </div>
  </div>
)
