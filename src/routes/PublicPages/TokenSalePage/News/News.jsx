import React from 'react'
import NewsLogoList from '../../NewsPage/NewsList/NewsLogoList'

export default () => {
  return (
    <div className='container center' style={{ 'marginTop': '100px' }}>
      <div className='title-container center-xs-up'>
        <div className='title'>
          News
        </div>
      </div>
      <NewsLogoList />
    </div>
  )
}