import React from 'react'
import './Advisor.scss'

export default () => (
  <div className='landing-section advisor-details' style={{ 'paddingTop': '0px' }}>
    <div className='container center' style={{ 'maxWidth': '600px' }}>
      <div className='title-container center-xs-up'>
        <div className='title'>
          Advisors
        </div>
      </div>
      <div className='team-members'>
        <div className='row'>
          <div className='col single'>
            <img src='images/team/chris-profile.png' className='profile' />
            <div className='name'>
              Christopher Lee
            </div>
            <div className='social'>
              <a href='https://www.linkedin.com/in/topagae' target='_blank'>
                <span className='item'>
                  <i className='fa fa-linkedin' style={{ 'transform': 'translate(5px, 3px)' }} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
