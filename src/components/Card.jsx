import React from 'react'

const Card = ({ renderHeader, renderButtons }) => (
  <div className='card'>
    <div className='card-header'>{renderHeader()}</div>
    <div className='card-buttons'>{renderButtons()}</div>
  </div>
)

export default Card
