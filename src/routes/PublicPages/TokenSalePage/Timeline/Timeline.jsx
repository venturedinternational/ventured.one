import React from 'react'
import './Timeline.scss'

import TimelineLG from './TimelineLG'
import TimelineXS from './TimelineXS'

export default () => (
  <div className='landing-section timeline-details white'>
    <div className='container center'>
      <div className='title-container center'>
        <div className='title'>
          Major Milestones
        </div>
        {/*<div className='subtitle'>*/}
          {/*Here is the important milestone and general plan for the following months. Check Whitepaper for more details.*/}
        {/*</div>*/}
      </div>
      <TimelineLG className='timeline lg' />
      <TimelineXS className='timeline xs' />
    </div>
  </div>
)
