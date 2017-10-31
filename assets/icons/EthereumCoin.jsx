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
      <g id='Ventured-ICO-v2' transform='translate(-146.000000, -2696.000000)'>
        <g id='ico-methods' transform='translate(0.000000, 2080.000000)'>
          <g id='graph' transform='translate(194.000000, 354.000000)'>
            <g id='eth-ico' transform='translate(0.000000, 308.000000)'>
              <g id='ether-icon'>
                <g id='surface'>
                  <use fill='black' fillOpacity='1' filter='url(#filter-2)' xlinkHref='#path-1' />
                  <use fill='#FFFFFF' fillRule='evenodd' xlinkHref='#path-1' />
                </g>
                <path d='M112.480639,106.781363 L96.6827503,116.118456 L80.878649,106.781363 L65.0745476,97.4442702 L96.6827503,45 L96.6827503,64.0344994 L96.6827503,45 L128.278528,97.4442702 L112.480639,106.781363 Z M65.0745476,103.432931 L96.6827503,122.107117 L96.6827503,147.962726 L65.0745476,103.432931 Z M96.6827503,122.107117 L128.303378,103.432931 L96.6827503,147.962726 L96.6827503,122.107117 Z' id='ethereum' fill='url(#linearGradient-3)' fillRule='nonzero' />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)
