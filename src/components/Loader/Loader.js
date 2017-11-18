import React from 'react'
import './Loader.css'

const Loader = ({ fullscreen }) => (
  <div className={fullscreen ? 'loader-fullscreen' : 'loader-simple'}>
    <div className='spinner'>
      <div className='bounce1' />
      <div className='bounce2' />
      <div className='bounce3' />
    </div>
  </div>
)

export default Loader
