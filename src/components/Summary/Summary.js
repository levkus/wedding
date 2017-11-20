import React, { Component } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'
import uniqBy from 'lodash/uniqBy'
import './Summary.css'

class Summary extends Component {
  state = {
    loading: false,
    error: false,
    people: []
  }

  componentWillMount = () => {
    this.setState({ loading: true })
    axios.get(process.env.REACT_APP_READ + 'people').then(res => {
      if (!res.data.people) {
        this.setState({
          error: 'Никто пока не ответил :(',
          loading: false,
        })
      } else {
        const people = uniqBy(res.data.people.reverse(), 'name')
        this.setState({
          people,
          loading: false,
        })
      }
    }, error => {
      console.warn(error)
      this.setState({
        error: 'Не получилось загрузить данные, попробуй позже.',
        loading: false
      })
    })
  }

  renderList = () => {
    return this.state.people.map((item, index) => (
      <li className='summary-item' key={index}>
        <div className='summary-name'>{item.name}</div>
        <div className='summary-status'>{item.status}</div>
      </li>
    ))
  }

  render () {
    const { loading, error } = this.state
    if (loading) {
      return <Loader fullscreen />
    } else if (error) {
      return <Error text={error} />
    }
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
