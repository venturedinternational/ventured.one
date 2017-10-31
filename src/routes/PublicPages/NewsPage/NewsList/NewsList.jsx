import React from 'react'

import './NewsList.scss'
import listData from './listData'
import NewsLogoList from './NewsLogoList'

export default class NewsList extends React.Component {
  state = {
    listData
  }
  renderNewsList = (items) => {
    return items.map(item => {
      console.log('item', item)
      return (<a href={item.url} target='_blank'><div className='newsItem' key={item.url}>
        <div className='time'>
          {item.time.getMonth()}/{item.time.getDate()}
        </div>
        <div className='content'>
          {item.title}
        </div>
        <div className='site'>
          {item.site}
        </div>
      </div></a>)
    })
  }
  render () {
    return (<div className='landing-section news-list-section'>
      <div className='container center'>
        <NewsLogoList />
        <div className='title-container center'>
          <div className='title'>
            Posts
          </div>
          <div className='newsList'>
            { this.renderNewsList(this.state.listData) }
          </div>
        </div>
      </div>
    </div>)
  }
}
