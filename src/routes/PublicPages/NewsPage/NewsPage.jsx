import React from 'react'

import Hero from 'components/Hero'
import NewsList from './NewsList'
import Contact from './Contact'

export default () => (
  <div className='tokensale'>
    <Hero
      title='Latest News'
      subtitle='Latest News and public posts'
    />
    <NewsList />
    <Contact />
  </div>
)
