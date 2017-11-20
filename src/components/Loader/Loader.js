import React from 'react'
import './Loader.css'

const blue = {
  cy: '35',
  cx: '70',
  r: '30'
}

const red = {
  cy: '35',
  cx: '90',
  r: '30'
}

const Loader = ({ fullscreen }) => (
  <div className={fullscreen ? 'loader-fullscreen' : 'loader-simple'}>
    <svg className='rings-container' viewBox="0 0 160 70" width="160" height="70">
      <circle className='ring blue-back' {...blue} />
      <circle className='ring blue-front' {...blue} />
      <circle className='ring red-back' {...red} />
      <circle className='ring red-front' {...red} />
    </svg>
  </div>
)

export default Loader
