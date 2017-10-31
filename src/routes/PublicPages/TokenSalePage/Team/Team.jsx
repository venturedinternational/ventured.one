import React from 'react'
import './Team.scss'

export default () => (
  <div className='landing-section team-details'>
    <div className='container center' style={{ 'maxWidth': '600px' }}>
      <div className='title-container center-xs-up'>
        <div className='title'>
          Team
        </div>
      </div>
      <div className='team-members'>
        <div className='row'>
          <div className='col'>
            <img src='images/team/frank-profile.png' className='profile' />
            <div className='name'>
              Frank Niu
            </div>
            <div className='social'>
              <a href='https://www.linkedin.com/in/xiniu/' target='_blank'>
                <span className='item'>
                  <i className='fa fa-linkedin' style={{ 'transform': 'translate(5px, 3px)' }} />
                </span>
              </a>
            </div>
          </div>
          <div className='col'>
            <img src='images/team/bruno-profile.png' className='profile' />
            <div className='name'>
              Bruno Barbosa
            </div>
            <div className='social'>
              <a href='https://www.linkedin.com/in/brunosbarbosa/' target='_blank'>
                <span className='item'>
                  <i className='fa fa-linkedin' style={{ 'transform': 'translate(5px, 3px)' }} />
                </span>
              </a>
            </div>
          </div>
          <div className='col'>
            <img src='images/team/andy-profile.png' className='profile' />
            <div className='name'>
              Andy Chen
            </div>
            <div className='social'>
              <a href='https://www.linkedin.com/in/amazingandyyy/' target='_blank'>
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
