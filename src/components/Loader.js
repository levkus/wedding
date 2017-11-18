import React from 'react'
import './Loader.css'

const Loader = () => (
  <div className='loader__container'>
    <div className='spinner'>
      <div className='bounce1' />
      <div className='bounce2' />
      <div className='bounce3' />
    </div>
  </div>
)

export default Loader
