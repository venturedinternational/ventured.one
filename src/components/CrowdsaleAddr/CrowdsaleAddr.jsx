import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CrowdsaleAddr.scss'

class CrowdsaleAddr extends Component {
  componentWillMount () {
    
  }

  state = {
    endDate: Number(this.props.endDate),
    remaining: 0,
  }

  componentDidMount () {
    this.startTimer()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  startTimer = () => {
    if (!this.timer) {
      this.timer = setInterval(this.CrowdsaleAddr, 1000)
    }
  }

  CrowdsaleAddr = () => {
    const currentDate = new Date().getTime()
    const remaining = this.state.endDate - currentDate

    this.setState({ remaining })

    if (remaining < 0) {
      clearInterval(this.timer)
    }
  }

  get timeLeft () {
    const { remaining } = this.state
    return {
      days:    Math.floor(remaining / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((remaining % (1000 * 60)) / 1000)
    }
  }

  render () {
    return (
      <div className='CrowdsaleAddr-timer'>
        <div className='timer-title'>
          {this.props.title}
        </div>
        <div className='timer-display'>
          <span>TBA</span>
        </div>
      </div>
    )
  }
}

CrowdsaleAddr.defaultProps = {
  endDate: 0,
  title: '',
}

CrowdsaleAddr.propTypes = {
  endDate: PropTypes.number,
  title: PropTypes.string,
}

export default CrowdsaleAddr
