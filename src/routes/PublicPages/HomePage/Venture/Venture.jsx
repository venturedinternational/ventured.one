import React from 'react'
import './Venture.scss'

import VentureBubble from './VentureBubble'

export default () => (
  <div className='landing-section feature-venture'>
    <div className='container centered'>
      <div className='title-container center'>
        <div className='title'>
          Every project is a venture.
        </div>
        <div className='subtitle'>
          From starting a company to organizing an event and everything in between. Find a project or create your own!
        </div>
      </div>
      <VentureBubble className='ventures-graph' />
    </div>
  </div>
)
