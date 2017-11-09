import React from 'react'
import PropTypes from 'prop-types'

const TimelineXS = (props) => (
  <svg className={props.className} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='305' height='588' viewBox='0 0 305 588'>
    <defs>
      <linearGradient id='timeline-xs-a' x1='0%' y1='50%' y2='50%'>
        <stop offset='0%' stopColor='#0AF' />
        <stop offset='100%' stopColor='#14E9FE' />
      </linearGradient>
      <radialGradient id='timeline-xs-d' cy='26.583%' r='98.581%' fx='50%' fy='26.583%'>
        <stop offset='0%' stopColor='#0AF' />
        <stop offset='100%' stopColor='#14E9FE' />
      </radialGradient>
      <circle id='timeline-xs-c' cx='23' cy='30' r='23' />
      <filter id='timeline-xs-b' width='206.5%' height='206.5%' x='-53.3%' y='-44.6%' filterUnits='objectBoundingBox'>
        <feOffset dy='4' in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='7.5' />
        <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.552109906   0 0 0 0 0.552109906   0 0 0 0 0.552109906  0 0 0 0.5 0' />
      </filter>
      <circle id='timeline-xs-f' cx='23' cy='201' r='23' />
      <filter id='timeline-xs-e' width='206.5%' height='206.5%' x='-53.3%' y='-44.6%' filterUnits='objectBoundingBox'>
        <feOffset dy='4' in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='7.5' />
        <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.552109906   0 0 0 0 0.552109906   0 0 0 0 0.552109906  0 0 0 0.5 0' />
      </filter>
      <circle id='timeline-xs-h' cx='23' cy='371' r='23' />
      <filter id='timeline-xs-g' width='206.5%' height='206.5%' x='-53.3%' y='-44.6%' filterUnits='objectBoundingBox'>
        <feOffset dy='4' in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='7.5' />
        <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.552109906   0 0 0 0 0.552109906   0 0 0 0 0.552109906  0 0 0 0.5 0' />
      </filter>
      <circle id='timeline-xs-j' cx='23' cy='542' r='23' />
      <filter id='timeline-xs-i' width='206.5%' height='206.5%' x='-53.3%' y='-44.6%' filterUnits='objectBoundingBox'>
        <feOffset dy='4' in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='7.5' />
        <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0.552109906   0 0 0 0 0.552109906   0 0 0 0 0.552109906  0 0 0 0.5 0' />
      </filter>
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(15 4)'>
      <rect width='542' height='15' x='-247' y='277' fill='#DCE3E3' rx='7.5' transform='rotate(90 24 284.5)' />
      <rect width='100' height='15' x='-26' y='56' fill='url(#timeline-xs-a)' rx='7.5' transform='rotate(90 24 63.5)' />
      <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
        <tspan x='69' y='55'>Crowdsale Announced</tspan>
      </text>
      <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
        <tspan x='69' y='21'>July 15</tspan>
      </text>
      <use fill='#000' filter='url(#timeline-xs-b)' xlinkHref='#timeline-xs-c' />
      <use fill='url(#timeline-xs-d)' xlinkHref='#timeline-xs-c' />
      <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
        <tspan x='69' y='226'>Crowdsale Starts</tspan>
      </text>
      <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
        <tspan x='69' y='192'>November 17</tspan>
      </text>
      <use fill='#000' filter='url(#timeline-xs-e)' xlinkHref='#timeline-xs-f' />
      <use fill='#FFF' xlinkHref='#timeline-xs-f' />
      <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
        <tspan x='69' y='396'>Crowdsale Ends</tspan>
      </text>
      <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
        <tspan x='69' y='362'>December 17</tspan>
      </text>
      <use fill='#000' filter='url(#timeline-xs-g)' xlinkHref='#timeline-xs-h' />
      <use fill='#FFF' xlinkHref='#timeline-xs-h' />
      <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
        <tspan x='69' y='567'>Network Development</tspan>
      </text>
      <text fill='#7B7B7B' fontFamily='.SFNSDisplay, .SF NS Display' fontSize='22'>
        <tspan x='69' y='533'>January 01</tspan>
      </text>
      <g>
        <use fill='#000' filter='url(#timeline-xs-i)' xlinkHref='#timeline-xs-j' />
        <use fill='#FFF' xlinkHref='#timeline-xs-j' />
      </g>
    </g>
  </svg>
)

TimelineXS.defaultProps = {
  className: ''
}

TimelineXS.propTypes = {
  className: PropTypes.string
}

export default TimelineXS
