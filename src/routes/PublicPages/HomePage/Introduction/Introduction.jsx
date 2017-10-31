import React from 'react'
import './Introduction.scss'

import Layers from './Layers.svg'

export default () => (
  <div className='landing-section introduction white'>
    <div className='container centered'>
      <div className='title-container center'>
        <div className='title'>
          What is the Ventured Network?
        </div>
        <div className='subtitle'>
          Ventured is building a Network Layer of smart work contracts
          and pre-trained models to give people the necessary information
          to make optimal choices about their work. Empowering people to choose
          their best work will mean individuals are no longer bound by companies.
        </div>
      </div>
      <Layers className='layer-graph' />
    </div>
  </div>
)
