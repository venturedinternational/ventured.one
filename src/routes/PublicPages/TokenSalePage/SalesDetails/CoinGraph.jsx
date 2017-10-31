import React from 'react'
import PropTypes from 'prop-types'

const CoinGraph = (props) => (
  <svg
    className={props.className}
    xmlns='http://www.w3.org/2000/svg'
    width='337' height='387'
    viewBox='0 0 337 387'>
    <defs>
      <linearGradient id='a' x1='50%' x2='50%' y1='0%' y2='100%'>
        <stop offset='0%' stopColor='#14E9FE' />
        <stop offset='100%' stopColor='#00AAFF' />
      </linearGradient>
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(-20 6)'>
      <polygon fill='#FFFFFF' stroke='#EBEBEB' strokeWidth='10' points='187.5 0 349.88 93.75 349.88 281.25 187.5 375 25.12 281.25 25.12 93.75' />
      <circle cx='96.5' cy='96.5' r='96.5' fill='url(#a)' transform='translate(164 188)' />
      <polygon fill='#FFFFFF' points='210.004 241.831 220.508 283.563 240.369 301.508 260.358 338.168 279.696 301.764 300.336 283.428 311.222 241.448 289.558 273.945 260.358 283.312 230.756 274.461' />
    </g>
  </svg>
)

CoinGraph.defaultProps = {
  className: ''
}

CoinGraph.propTypes = {
  className: PropTypes.string,
}

export default CoinGraph
