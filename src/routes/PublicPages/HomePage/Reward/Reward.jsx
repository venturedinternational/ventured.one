import React from 'react'
import './Reward.scss'
import { Button } from 'antd'

import Background from './background.svg'

export default () => (
  <div className='landing-section feature-reward white'>
    <div className='container centered'>
      <div className='hightlight-container'>
        <div className='title-container center reverse'>
          <div className='title'>
            We are work, decentralized
          </div>
          <div className='subtitle'>
            Ventured seeks to establish social equity between contractors and companies
            through smart work contracts,
            Built on Ethereum, that enable the exchange of
            equity and create accountability on the blockchain...
          </div>
        </div>
        <Background className='background-symbols' />
        <Button
          className='button-lg white whitepaper'
          type='secondary'
        >
          <a
            target='_blank'
            href='https://github.com/venturednetwork/whitepaper'
          >
            Whitepaper
            <i className='fa fa-chevron-right'
              style={{
                'fontSize': '1rem',
                'marginLeft': '10px',
                'transform': 'translate(0px, -0.5px)'
              }} />
          </a>
        </Button>
      </div>
    </div>
  </div>
)
