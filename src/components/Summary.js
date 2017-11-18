import React, { Component } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { read } from '../endpoints'
import './Summary.css'

class Summary extends Component {
  state = {
    people: []
  }
  componentWillMount = () => {
    axios.get(read).then(response => {
      this.setState({ people: response.data.people })
    })
  }

  renderList = () => {
    if (this.state.people.length === 0) {
      return <Loader />
    }
    return this.state.people.map((item, index) => (
      <li className='summary-item' key={index}>
        <div className='summary-name'>{item.name}</div>
        <div className='summary-status'>{item.status}</div>
      </li>
    ))
  }

  render () {
    return (
      <div className='summary'>
        <h1>Список</h1>
        <div className='summary-date'>{`Вот что мы имеем на ${new Date().toLocaleString('ru-RU')}`}</div>
        <div className='summary-list-header'>
          <div className='summary-list-header-item'>Гости</div>
          <div className='summary-list-header-item'>Статус</div>
        </div>
        <ul className='summary-list'>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default Summary
