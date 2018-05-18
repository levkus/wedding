import React from 'react'
import gif from './gif.gif'
import './Thanks.css'

const Thanks = () => (
  <div className='thanks'>
    <div className='thanks-text'>Мы все записали :)</div>
    <div className='thanks-gif-container'>
      <img className='thanks-gif' src={gif} alt="thanks" />
    </div>
  </div>

)

export default Thanks
