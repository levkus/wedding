import React from 'react'
import './Thanks.css'

const Thanks = () => (
  <div className='thanks'>
    <div className='thanks-text'>Мы все записали :)</div>
    <div className='thanks-gif-container'>
      <iframe
        className='thanks-gif'
        title='thanks-gif'
        src="https://giphy.com/embed/n6Gk6pAMeP9NS"
        frameBorder="0"
      />
    </div>
  </div>

)

export default Thanks
