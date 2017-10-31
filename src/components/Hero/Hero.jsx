import React from 'react'
import PropTypes from 'prop-types'
import Particle from 'react-particles-js'
import paramslg from './particlesParamsLG'
import paramsxs from './particlesParamsXS'

import './Hero.scss'

const Hero = (props) => (
  <div className='hero-component'>
    <span className='particle xs'><Particle params={paramsxs} /></span>
    <span className='particle lg'><Particle params={paramslg} /></span>
    <div className='container centered'>
      <div className='title'>{props.title}</div>
      <div className='subtitle'>{props.subtitle}</div>
    </div>
  </div>
)

Hero.defaultProps = {
  title: '',
  subtitle: '',
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Hero
