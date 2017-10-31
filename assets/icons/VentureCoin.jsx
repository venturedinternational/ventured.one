import React from 'react'
import PropTypes from 'prop-types'

const Coin = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    className={props.className}
    width={props.width}
    height={props.height}
    viewBox='0 0 417 417'
  >
    <defs>
      <linearGradient id='venture-coin-icon-d' x1='50%' x2='50%' y1='100%' y2='0%'>
        <stop offset='0%' stopColor='#0AF' />
        <stop offset='100%' stopColor='#14E9FE' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-c' x1='50%' x2='-34.566%' y1='0%' y2='28.007%'>
        <stop offset='0%' stopColor='#0AF' />
        <stop offset='100%' stopColor='#14E9FE' />
      </linearGradient>
      <circle id='venture-coin-icon-b' cx='157.5' cy='157.5' r='157.5' />
      <filter id='venture-coin-icon-a' width='151.4%' height='151.4%' x='-25.7%' y='-25.1%' filterUnits='objectBoundingBox'>
        <feMorphology in='SourceAlpha' operator='dilate' radius='5' result='shadowSpreadOuter1' />
        <feOffset dy='2' in='shadowSpreadOuter1' result='shadowOffsetOuter1' />
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='25' />
        <feComposite in='shadowBlurOuter1' in2='SourceAlpha' operator='out' result='shadowBlurOuter1' />
        <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168733016 0' />
      </filter>
      <radialGradient id='venture-coin-icon-e' cx='46.677%' cy='-6.902%' r='159.742%' fx='46.677%' fy='-6.902%'>
        <stop offset='0%' stopColor='#14E9FE' />
        <stop offset='100%' stopColor='#0AF' />
      </radialGradient>
      <linearGradient id='venture-coin-icon-f' x1='0%' x2='100.935%' y1='100%' y2='-.313%'>
        <stop offset='0%' stopColor='#B5B4B7' />
        <stop offset='100%' stopColor='#504E4E' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-g' x1='0%' x2='100.616%' y1='100%' y2='-.555%'>
        <stop offset='0%' stopColor='#484747' />
        <stop offset='100%' stopColor='#4C4A4A' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-h' x1='0%' x2='100.73%' y1='100%' y2='-.351%'>
        <stop offset='0%' stopColor='#C3C2C5' />
        <stop offset='100%' stopColor='#5A5858' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-i' x1='0%' x2='100.677%' y1='100%' y2='-.373%'>
        <stop offset='0%' stopColor='#D6D5D9' />
        <stop offset='100%' stopColor='#C7C6CB' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-j' x1='0%' x2='100.774%' y1='100%' y2='-.503%'>
        <stop offset='0%' stopColor='#545252' />
        <stop offset='100%' stopColor='#A2A1A6' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-k' x1='0%' x2='100.773%' y1='100%' y2='-.503%'>
        <stop offset='0%' stopColor='#5B5959' />
        <stop offset='100%' stopColor='#504E4E' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-l' x1='0%' x2='100.663%' y1='100%' y2='-.325%'>
        <stop offset='0%' stopColor='#96959A' />
        <stop offset='100%' stopColor='#ABACB0' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-m' x1='0%' x2='100.942%' y1='100%' y2='-1.962%'>
        <stop offset='0%' stopColor='#C5C6CA' />
        <stop offset='100%' stopColor='#6E6D6D' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-n' x1='0%' x2='100.461%' y1='100%' y2='-2%'>
        <stop offset='0%' stopColor='#605E5E' />
        <stop offset='100%' stopColor='#5E5D5D' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-o' x1='0%' x2='100.46%' y1='100%' y2='-.328%'>
        <stop offset='0%' stopColor='#605E5E' />
        <stop offset='100%' stopColor='#646363' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-p' x1='0%' x2='100.649%' y1='100%' y2='-1.976%'>
        <stop offset='0%' stopColor='#C5C6CA' />
        <stop offset='100%' stopColor='#5C5B5B' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-q' x1='0%' x2='100.676%' y1='100%' y2='-.328%'>
        <stop offset='0%' stopColor='#A7A8AC' />
        <stop offset='100%' stopColor='#4E4C4C' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-r' x1='0%' x2='100.472%' y1='100%' y2='-1.312%'>
        <stop offset='0%' stopColor='#767676' />
        <stop offset='100%' stopColor='#706F6F' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-s' x1='0%' x2='100.682%' y1='100%' y2='-1.412%'>
        <stop offset='0%' stopColor='#666464' />
        <stop offset='100%' stopColor='#C8C7CC' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-t' x1='0%' x2='100.679%' y1='100%' y2='-.648%'>
        <stop offset='0%' stopColor='#666464' />
        <stop offset='100%' stopColor='#5F5D5D' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-u' x1='0%' x2='100.415%' y1='100%' y2='-1.413%'>
        <stop offset='0%' stopColor='#D7D6DA' />
        <stop offset='100%' stopColor='#D5D4D7' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-v' x1='0%' x2='101.704%' y1='100%' y2='-.984%'>
        <stop offset='0%' stopColor='#504E4E' />
        <stop offset='100%' stopColor='#5E5C5C' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-w' x1='0%' x2='100.989%' y1='100%' y2='-1.964%'>
        <stop offset='0%' stopColor='#656363' />
        <stop offset='100%' stopColor='#CECDD1' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-x' x1='0%' x2='100.893%' y1='100%' y2='-.283%'>
        <stop offset='0%' stopColor='#ACABAF' />
        <stop offset='100%' stopColor='#575656' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-y' x1='0%' x2='100.581%' y1='100%' y2='-.621%'>
        <stop offset='0%' stopColor='#424040' />
        <stop offset='100%' stopColor='#86878B' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-z' x1='0%' x2='100.634%' y1='100%' y2='-.62%'>
        <stop offset='0%' stopColor='#4C4B4B' />
        <stop offset='100%' stopColor='#99989D' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-A' x1='0%' x2='100.717%' y1='100%' y2='-.644%'>
        <stop offset='0%' stopColor='#646262' />
        <stop offset='100%' stopColor='#585656' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-B' x1='0%' x2='100.719%' y1='100%' y2='-1.311%'>
        <stop offset='0%' stopColor='#646262' />
        <stop offset='100%' stopColor='#6A6868' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-C' x1='0%' x2='100.577%' y1='100%' y2='-.643%'>
        <stop offset='0%' stopColor='#575555' />
        <stop offset='100%' stopColor='#555353' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-D' x1='0%' x2='100.598%' y1='100%' y2='-.36%'>
        <stop offset='0%' stopColor='#727070' />
        <stop offset='100%' stopColor='#CBCACE' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-E' x1='0%' x2='100.699%' y1='100%' y2='-.311%'>
        <stop offset='0%' stopColor='#494747' />
        <stop offset='100%' stopColor='#BEBDC1' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-F' x1='0%' x2='101.939%' y1='100%' y2='-1.995%'>
        <stop offset='0%' stopColor='#727272' />
        <stop offset='100%' stopColor='#B3B4B8' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-G' x1='0%' x2='100.977%' y1='100%' y2='-1.998%'>
        <stop offset='0%' stopColor='#717070' />
        <stop offset='100%' stopColor='#626060' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-H' x1='0%' x2='101.878%' y1='100%' y2='-1.977%'>
        <stop offset='0%' stopColor='#595757' />
        <stop offset='100%' stopColor='#535151' />
      </linearGradient>
      <linearGradient id='venture-coin-icon-I' x1='0%' x2='101.874%' y1='100%' y2='-1.024%'>
        <stop offset='0%' stopColor='#595757' />
        <stop offset='100%' stopColor='#525050' />
      </linearGradient>
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(51 49)'>
      <use fill='#000' filter='url(#venture-coin-icon-a)' xlinkHref='#venture-coin-icon-b' />
      <use fill='url(#venture-coin-icon-d)' stroke='url(#venture-coin-icon-c)' strokeWidth='10' xlinkHref='#venture-coin-icon-b' />
      <circle cx='157.5' cy='157.5' r='157.5' stroke='url(#venture-coin-icon-e)' strokeDasharray='3 5' strokeLinejoin='round' strokeWidth='6' />
      <g fillRule='nonzero' transform='translate(54.942 74.172)'>
        <polygon fill='url(#venture-coin-icon-f)' points='0 85.725 21.378 .799 28.779 8.214' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 86.524)' />
        <polygon fill='url(#venture-coin-icon-g)' points='21.378 114.833 61.795 78.31 28.779 122.248' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 200.558)' />
        <polygon fill='url(#venture-coin-icon-h)' points='0 78.31 28.779 .799 36.18 6.615' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 79.11)' />
        <polygon fill='url(#venture-coin-icon-i)' points='0 72.494 42.233 6.092 36.18 .799' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 73.293)' />
        <polygon fill='url(#venture-coin-icon-j)' points='28.779 116.431 61.795 72.494 36.18 122.248' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 194.742)' />
        <polygon fill='url(#venture-coin-icon-k)' points='36.18 122.248 61.795 72.494 73.13 82.555' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 194.742)' />
        <polygon fill='url(#venture-coin-icon-l)' points='61.795 186.775 102.459 112.187 73.13 196.836' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 309.023)' />
        <polygon fill='url(#venture-coin-icon-m)' points='87.932 85.201 102.459 98.956 116.188 85.725' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 184.157)' />
        <polygon fill='url(#venture-coin-icon-n)' points='73.13 98.956 87.932 112.187 130.963 99.479' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 211.142)' />
        <polygon fill='url(#venture-coin-icon-o)' points='73.13 196.313 102.459 111.663 130.963 196.836' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 308.5)' />
        <polygon fill='url(#venture-coin-icon-p)' points='87.932 111.139 116.188 111.663 130.963 98.432' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 210.095)' />
        <polygon fill='url(#venture-coin-icon-q)' points='102.459 111.663 141.803 185.728 130.963 196.836' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 308.5)' />
        <polygon fill='url(#venture-coin-icon-r)' points='102.459 66.43 161.86 85.477 128.872 66.154' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 151.631)' />
        <polygon fill='url(#venture-coin-icon-s)' points='36.18 80.433 42.233 85.725 76.046 67.202' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 152.927)' />
        <polygon fill='url(#venture-coin-icon-t)' points='36.18 112.187 73.13 72.494 76.046 98.956' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 184.68)' />
        <polygon fill='url(#venture-coin-icon-u)' points='42.233 85.725 102.459 67.725 76.046 67.202' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 152.927)' />
        <polygon fill='url(#venture-coin-icon-v)' points='73.13 85.725 87.932 98.956 76.046 112.187' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 197.911)' />
        <polygon fill='url(#venture-coin-icon-w)' points='87.932 85.201 102.459 98.956 76.046 98.432' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 184.157)' />
        <polygon fill='url(#venture-coin-icon-x)' points='183.788 0 205.964 85.477 176.387 6.615' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 85.477)' />
        <polygon fill='url(#venture-coin-icon-y)' points='130.963 89.97 141.803 78.861 176.387 122.771' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 201.633)' />
        <polygon fill='url(#venture-coin-icon-z)' points='141.803 78.861 183.788 116.156 176.387 122.771' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 201.633)' />
        <polygon fill='url(#venture-coin-icon-A)' points='128.872 98.68 130.963 72.494 168.986 111.663' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 184.157)' />
        <polygon fill='url(#venture-coin-icon-B)' points='128.872 66.154 161.86 85.477 168.986 79.137' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 151.631)' />
        <polygon fill='url(#venture-coin-icon-C)' points='130.963 72.494 176.387 105.295 168.986 111.663' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 184.157)' />
        <polygon fill='url(#venture-coin-icon-D)' points='161.86 6.34 205.964 72.494 168.986 0' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 72.494)' />
        <polygon fill='url(#venture-coin-icon-E)' points='176.387 0 205.964 78.861 168.986 6.367' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 78.861)' />
        <polygon fill='url(#venture-coin-icon-F)' points='102.459 98.432 116.188 85.201 116.188 85.201' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 183.633)' />
        <polygon fill='url(#venture-coin-icon-G)' points='102.459 98.432 128.872 98.156 116.188 85.201' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 183.633)' />
        <path fill='url(#venture-coin-icon-H)' d='M116.188215,111.662834 L130.9628,98.4319871 L116.188215,111.662834 Z' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 210.095)' />
        <polygon fill='url(#venture-coin-icon-I)' points='128.872 111.663 130.963 85.477 116.188 98.708' style={{ mixBlendMode: 'screen' }} transform='matrix(1 0 0 -1 0 197.14)' />
      </g>
    </g>
  </svg>
)

Coin.defaultProps = {
  className: '',
  width: 417,
  height: 417
}

Coin.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Coin
