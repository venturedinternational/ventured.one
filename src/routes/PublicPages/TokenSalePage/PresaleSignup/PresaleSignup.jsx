import React from 'react'
import { Button } from 'antd'

import './PresaleSignup.scss'

export default() => (
  <div>

    <Button className='button-lg primary ico-presale-signup pulse' type='primary'>
      <a
        target='_blank'
        href='http://one.us16.list-manage.com/subscribe/post?u=118ecdb6a70c9cf4b14f4e6ca&id=a6eb0f66b1'>
        Notifiy Me When It Starts
        <i
          className='fa fa-envelope'
          style={{
            'fontSize': '1rem',
            'marginLeft': '10px',
            'transform': 'translate(0px, -0.5px)'
          }} />
      </a>
    </Button>

  </div>
)
