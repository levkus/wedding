import React from 'react'
import './Card.css'

const Card = ({ renderHeader, renderButtons, text, signature }) => (
  <div className='card'>
    <div className='card-top' />
    <div className='card-bottom' />
    <div className='card-wrap' />
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
        <div className='card-data'>Кафе "Среда" (Где это?)</div>
      </div>
    </div>
    <div className='card-signature'>{signature}</div>
    <div className='card-separator-two' />
    <div className='card-before-buttons'>Отпишитесь бла-бла-бла:</div>
    <div className='card-buttons'>{renderButtons()}</div>
    <div className='card-thanks'>Спасибо бла бла бла!</div>
  </div>
)

export default Card
