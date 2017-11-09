import React from 'react'
import PropTypes from 'prop-types'

const TimelineLG = (props) => (
  <svg className={props.className} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1133' height='208' viewBox='0 0 1133 208'>
    <defs>
      <linearGradient id='timeline-md-a' x1='0%' y1='50%' y2='50%'>
        <stop offset='0%' stopColor='#0AF' />
        <stop offset='100%' stopColor='#14E9FE' />
      </linearGradient>
      <radialGradient id='timeline-md-d' cy='26.583%' r='98.581%' fx='50%' fy='26.583%'>
        <stop offset='0%' stopColor='#0AF' />
        <stop offset='100%' stopColor='#14E9FE' />
      </radialGradient>
      <circle id='timeline-md-c' cx='23' cy='104' r='23' />
      <filter id='timeline-md-b' width='206.5%' height='206.5%' x='-53.3%' y='-44.6%' filterUnits='objectBoundingBox'>
        <feOffset dy='4' in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='7.5' />
        <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.552109906   0 0 0 0 0.552109906   0 0 0 0 0.552109906  0 0 0 0.5 0' />
      </filter>
      <circle id='timeline-md-f' cx='71.333' cy='104' r='23' />
      <filter id='timeline-md-e' width='206.5%' height='206.5%' x='-53.3%' y='-44.6%' filterUnits='objectBoundingBox'>
        <feOffset dy='4' in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='7.5' />
        <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.742878401   0 0 0 0 0.742878401   0 0 0 0 0.742878401  0 0 0 0.5 0' />
      </filter>
      <circle id='timeline-md-h' cx='70.667' cy='104' r='23' />
      <filter id='timeline-md-g' width='206.5%' height='206.5%' x='-53.3%' y='-44.6%' filterUnits='objectBoundingBox'>
        <feOffset dy='4' in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='7.5' />
        <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.742878401   0 0 0 0 0.742878401   0 0 0 0 0.742878401  0 0 0 0.5 0' />
      </filter>
      <circle id='timeline-md-j' cx='119' cy='104' r='23' />
      <filter id='timeline-md-i' width='206.5%' height='206.5%' x='-53.3%' y='-44.6%' filterUnits='objectBoundingBox'>
        <feOffset dy='4' in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='7.5' />
        <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.742878401   0 0 0 0 0.742878401   0 0 0 0 0.742878401  0 0 0 0.5 0' />
      </filter>
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(15 -4)'>
      <rect width='1057' height='15' x='23' y='96' fill='#DCE3E3' rx='7.5' />
      <rect width='142' height='15' x='23' y='96' fill='url(#timeline-md-a)' rx='7.5' />
      <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
        <tspan x='0' y='183'>Crowdsale</tspan> <tspan x='0' y='208'>Announced</tspan>
      </text>
      <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
        <tspan x='0' y='21'>July 15</tspan>
      </text>
      <use fill='#000' filter='url(#timeline-md-b)' xlinkHref='#timeline-md-c' />
      <use fill='url(#timeline-md-d)' xlinkHref='#timeline-md-c' />
      <g transform='translate(304)'>
        <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
          <tspan x='12.987' y='180.206'>Crowdsale</tspan> <tspan x='36.297' y='205.206'>Starts</tspan>
        </text>
        <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
          <tspan x='15.801' y='18.206'>November 17</tspan>
        </text>
        <use fill='#000' filter='url(#timeline-md-e)' xlinkHref='#timeline-md-f' />
        <use fill='#FFF' xlinkHref='#timeline-md-f' />
      </g>
      <g transform='translate(657)'>
        <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
          <tspan x='12.987' y='180.206'>Crowdsale</tspan> <tspan x='40.809' y='205.206'>Ends</tspan>
        </text>
        <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
          <tspan x='0' y='21'>December 17</tspan>
        </text>
        <use fill='#000' filter='url(#timeline-md-g)' xlinkHref='#timeline-md-h' />
        <use fill='#FFF' xlinkHref='#timeline-md-h' />
      </g>
      <g transform='translate(961)'>
        <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
          <tspan x='53.592' y='180.206'>Network </tspan> <tspan x='5.177' y='205.206'>Development</tspan>
        </text>
        <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
          <tspan x='22.159' y='18.206'>January 01</tspan>
        </text>
        <use fill='#000' filter='url(#timeline-md-i)' xlinkHref='#timeline-md-j' />
        <use fill='#FFF' xlinkHref='#timeline-md-j' />
      </g>
    </g>
  </svg>
)

TimelineLG.defaultProps = {
  className: ''
}

TimelineLG.propTypes = {
  className: PropTypes.string
}

export default TimelineLG
