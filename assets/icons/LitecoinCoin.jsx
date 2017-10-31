import React from 'react'

export default () => (
  <svg width='289px' height='289px' viewBox='0 0 289 289' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
    <defs>
      <circle id='path-1' cx='96.5' cy='96.5' r='96.5' />
      <filter x='-39.4%' y='-38.3%' width='178.8%' height='178.8%' filterUnits='objectBoundingBox' id='filter-2'>
        <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur stdDeviation='25' in='shadowOffsetOuter1' result='shadowBlurOuter1' />
        <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168733016 0' type='matrix' in='shadowBlurOuter1' />
      </filter>
      <linearGradient x1='50%' y1='100%' x2='50%' y2='0%' id='linearGradient-3'>
        <stop stopColor='#00AAFF' offset='0%' />
        <stop stopColor='#14E9FE' offset='100%' />
      </linearGradient>
    </defs>
    <g id='Welcome' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='Ventured-ICO-v2' transform='translate(-146.000000, -3018.000000)'>
        <g id='ico-methods' transform='translate(0.000000, 2080.000000)'>
          <g id='graph' transform='translate(194.000000, 354.000000)'>
            <g id='ltc-ico' transform='translate(0.000000, 630.000000)'>
              <g id='ltc-icon'>
                <g id='surface'>
                  <use fill='black' fillOpacity='1' filter='url(#filter-2)' xlinkHref='#path-1' />
                  <use fill='#FFFFFF' fillRule='evenodd' xlinkHref='#path-1' />
                </g>
                <polyline id='litecoin' fill='url(#linearGradient-3)' fillRule='nonzero' points='92.3165311 120.327297 97.5218458 100.726924 109.845585 96.2245432 112.910943 84.7054781 112.806282 84.4197286 100.675313 88.8515237 109.415744 55.9401874 84.6275807 55.9401874 73.1971126 98.8902407 63.6534676 102.376677 60.5 114.252077 70.036343 110.768562 63.2995666 136.081005 129.270712 136.081005 133.5 120.327297 92.3165311 120.327297' />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)
