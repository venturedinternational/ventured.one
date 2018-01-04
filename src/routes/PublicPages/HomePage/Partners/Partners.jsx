import React from 'react'

import EEALogo from './EEALogo'
// import CreditKarmaLogo from './CreditKarmaLogo'

import './Partners.scss'

export default () => (
  <div className='landing-section partners-section'>
    <div className='container center'>
      <div className='title-container center-xs-up'>
        <div className='title'>
          Partners
        </div>
      </div>
      <div className='partners-container'>
        <EEALogo className='partner' />
      </div>
    </div>
  </div>
)
