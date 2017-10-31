import React from 'react'

import Hero from 'components/Hero'
import Token from './Token'
import SalesDetails from './SalesDetails'
import Exchange from './Exchange'
import Timeline from './Timeline'
import Team from './Team'
import Advisor from './Advisor'
import Partners from './Partners'
import News from './News'
import Whitepaper from './Whitepaper'

export default () => (
  <div className='tokensale'>
    <Hero
      title='VentureCoin Crowdsale'
      subtitle='Initial VentureCoin Offering'
    />
    <Token />
    <SalesDetails />
    <Exchange />
    <Timeline />
    <Team />
    <Advisor />
    <News />
    <Partners />
    <Whitepaper />
  </div>
)
