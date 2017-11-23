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
        <div className='card-data'>
          <span>Кафе "Среда"</span>
          <span className='card-brackets'>(
            <a className='card-place-link' href='https://goo.gl/maps/aZxmPqPJ8fR2' target='_blank' rel='noreferrer noopener'>Где это?</a>
          )</span>
        </div>
      </div>
    </div>
    <div className='card-signature'>{signature}</div>
    <div className='card-separator-two' />
    <div className='card-before-buttons'>Внимание! Выбор правильной кнопочки нам очень поможет:</div>
    <div className='card-buttons'>{renderButtons()}</div>
    <div className='card-thanks'>Подсказка: первая кнопка - всегда отличный выбор.</div>
  </div>
)

export default Card
