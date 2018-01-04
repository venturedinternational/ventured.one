import React from 'react'

import Hero from './HeroBlue'
import Introduction from './Introduction'
import Venture from './Venture'
import Work from './Work'
import Reward from './Reward'
import Team from './Team'
import EEA from './EEA'
import News from './News'

import './HomePage.scss'

export default () => (
  <div>
    <Hero />
    <EEA />
    <Introduction />
    <Venture />
    <Work />
    <Reward />
    <News />
    <Team />
  </div>
)
