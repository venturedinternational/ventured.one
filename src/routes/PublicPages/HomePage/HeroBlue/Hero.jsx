import React from 'react'
import Particle from 'react-particles-js'
import paramslg from './particlesParamsLG'
import paramsxs from './particlesParamsXS'

import './Hero.scss'

export const Hero = () => (
  <div className='hero-section'>
    <div className='background-image' />
    <span className='particle xs'><Particle params={paramsxs} /></span>
    <span className='particle lg'><Particle params={paramslg} /></span>
    <div className='container centered'>
      <div className='title'>Ventured Network</div>
      <div className='subtitle'>Connecting ideas and work on the ethereum blockchain</div>
      <div className='actions'>
        <button
          className='button-lg white whitepaper'
        >
          <a
            href='https://github.com/venturedinternational/whitepaper'
            target='_blank'
          >
            Discover the Whitepaper
          </a>
        </button>
        <button
          className='button-lg primary contribute'
        >
          <a
            href='https://github.com/venturedinternational'
            target='_blank'
          >
            Contribute to the project
          </a>
        </button>
      </div>
    </div>
  </div>
)

export default Hero
