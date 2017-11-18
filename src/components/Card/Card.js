import React from 'react'
import './Card.css'

const Card = ({ renderHeader, renderButtons, text, signature }) => (
  <div className='card'>
    <div className='card-header'>{renderHeader()}</div>
    <div className='card-separator-one' />
    <div className='card-text'>{text}</div>
    <div className='card-details'>
      <div className='card-detail'>
        <div className='card-label'>время:</div>
        <div className='card-data'>07.07.2018 15:00</div>
      </div>
      <div className='card-detail'>
        <div className='card-label'>место:</div>
        <div className='card-data'>г. Москва, кафе "Среда"</div>
      </div>
    </div>
    <div className='card-signature'>{signature}</div>
    <div className='card-separator-two' />
    <div className='card-buttons'>{renderButtons()}</div>
  </div>
)

export default Card
