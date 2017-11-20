import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Card from '../Card/Card'
import Button from '../Button/Button'
import Loader from '../Loader/Loader'
import Envelope from '../Envelope/Envelope'
import Error from '../Error/Error'

import './Invite.css'

export default class Invite extends Component {

  state = {
    loading: false,
    submitted: false,
    alias: {},
    error: false
  }

  componentWillMount = () => {
    this.setState({ loading: true })
    axios.get(process.env.REACT_APP_READ + 'aliases').then(res => {
      const alias = res.data.aliases.find(a => a.alias === this.props.match.params.alias)
      if (!alias) {
        this.setState({
          loading: false,
          error: 'Увы, такого приглашения не существует :('
        })
      } else {
        this.setState({
          alias,
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

  renderHeader = () => {
    const { alias } = this.state
    return (<div>
      <div>{alias.greeting}</div>
      <div>{alias.name}</div>
    </div>)
  }

  sendFeedback = (type) => () => {
    const { alias } = this.state
    const feedback = {
      name: alias.name,
      status: type
    }
    axios.post(process.env.REACT_APP_WRITE, feedback).then(res => {
      this.setState({ submitted: type })
    }, error => {
      console.warn(error);
      this.setState({ error: 'Не получилось отправить ответ :( Попробуй позже.' })
    })
  }

  renderButtons = () => {
    const { alias } = this.state
    const buttons = alias.buttons.split('|')
    return buttons.map(button => (
      <Button key={button} onClick={this.sendFeedback(button)}>{button}</Button>
    ))
  }

  render () {
    const { loading, submitted, error, alias } = this.state
    if (loading) {
      return <Loader fullscreen />
    } else if (error) {
      return <Error text={error} />
    } else if (submitted) {
      return <Redirect to='/thanks' push />
    }
    const { text, signature } = alias
    return(
      <div className='invite'>
        <Envelope>
          <Card
            renderHeader={this.renderHeader}
            renderButtons={this.renderButtons}
            text={text}
            signature={signature}
          />
        </Envelope>
      </div>
    )
  }
}
