import React from 'react'

import Hero from 'components/Hero'
import Team from '../TokenSalePage/Team'
import Advisor from '../TokenSalePage/Advisor'
import Timeline from '../TokenSalePage/Timeline'
import JoinUs from './JoinUs'

export default () => (
  <div className='tokensale'>
    <Hero
      title='Ventured International Inc.'
      subtitle='About our team and many more'
    />
    <Team />
    <Advisor />
    <Timeline />
    <JoinUs />
  </div>
)
