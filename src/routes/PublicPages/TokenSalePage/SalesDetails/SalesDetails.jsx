import React from 'react'
import './SalesDetails.scss'

import CoinGraph from './CoinGraph'

export default () => (
  <div className='landing-section sales-details white'>
    <div className='container centered'>
      <div className='row'>
        <div className='col'>
          <CoinGraph className='sales-details-graph' />
        </div>
        <div className='col'>
          <div className='title-container'>
            <div className='title'>
              Crowdsale Breakdown
            </div>
            <div className='subtitle'>
              Token allocation:
              <br />
              33% Tokens for CrowdSale
              <br />
              33% Core Team
              <br />
              20% Reserved Tokens
              <br />
              10% Early contributors and Investors
              <br />
              4% Network Promotion and Tokensale Costs
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
