import React from 'react'
import './Contact.scss'
import { Button } from 'antd'

import Background from './background.svg'

export default () => (
  <div className='landing-section whitepaper-details white'>
    <div className='container centered'>
      <div className='hightlight-container'>
        <div className='title-container center reverse'>
          <div className='title'>
            We would love to hear from you!
          </div>
        </div>
        <Background className='background-symbols' />
        <Button
          className='button-lg white action'
          type='secondary'
        >
          <a
            href='mailto:hello@ventured.one?subject=Hello%20Venture'
          >
            Contact Us
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
