import React, { Component } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'
import Button from '../Button/Button'
import copyTextToClipboard from './utils'

import './Links.css'

export default class Invite extends Component {

  state = {
    loading: false,
    aliases: [],
  }

  componentDidMount = () => {

  }

  componentWillMount = () => {
    this.setState({ loading: true })
    axios.get(process.env.REACT_APP_READ + 'aliases').then(res => {
      const aliases = res.data.aliases
      if (!aliases) {
        this.setState({
          loading: false,
          error: 'Не работает :('
        })
      } else {
        this.setState({
          aliases,
          loading: false,
        })
      }
    }, error => {
      console.warn(error)
      this.setState({
        error: 'Что-то пошло не так :( Попробуй позже.',
        loading: false
      })
    })
  }

  copyLink = (link) => () => {
    copyTextToClipboard(link)
  }

  renderLinks = () => {
    return this.state.aliases.map(alias => {
      const value = `http://priday.ru/invite/${alias.alias}`
      return <Button key={alias.alias} onClick={this.copyLink(value)}>{alias.name}</Button>
    })
  }

  render () {
    const { loading, error } = this.state
    if (loading) {
      return <Loader fullscreen />
    } else if (error) {
      return <Error text={error} />
    }
    return(
      <div className='card' style={{ margin: 0 }}>
        {this.renderLinks()}
      </div>
    )
  }
}
