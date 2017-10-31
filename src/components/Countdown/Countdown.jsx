import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Countdown.scss'

class Countdown extends Component {
  componentWillMount () {
    if (!this.props.endDate || typeof this.props.endDate !== 'number') {
      console.error('CoundDown requires endDate as a Number prop')
    }
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
      this.timer = setInterval(this.countDown, 1000)
    }
  }

  countDown = () => {
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
      <div className='countdown-timer'>
        <div className='timer-title'>
          {this.props.title}
        </div>
        <div className='timer-display'>
          <span>{this.timeLeft.days}d</span>
          <span>{this.timeLeft.hours}h</span>
          <span>{this.timeLeft.minutes}m</span>
          <span>{this.timeLeft.seconds}s</span>
        </div>
      </div>
    )
  }
}

Countdown.defaultProps = {
  endDate: 0,
  title: '',
}

Countdown.propTypes = {
  endDate: PropTypes.number,
  title: PropTypes.string,
}

export default Countdown
