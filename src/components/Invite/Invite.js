import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import aliases from '../../aliases'
import Card from '../Card/Card'

export default class Invite extends Component {

  state = {
    submitted: false
  }

  renderHeader = () => {
    const { id } = this.props.match.params
    const alias = aliases.find(a => a.key === id)
    return `${alias.greeting} ${alias.name}`
  }

  sendFeedback = (type) => () => {
    const { id } = this.props.match.params
    const alias = aliases.find(a => a.key === id)
    const feedback = {
      name: alias.name,
      status: type
    }
    axios.post(process.env.REACT_APP_WRITE, feedback).then(() => {
      this.setState({ submitted: true })
    })
  }

  renderButtons = () => {
    const { id } = this.props.match.params
    const alias = aliases.find(a => a.key === id)
    const buttons = alias.buttons
    return buttons.map(button => (
      <button key={button} onClick={this.sendFeedback(button)}>{button}</button>
    ))
  }

  render () {
    if (this.state.submitted) {
      return <Redirect to='/thanks' />
    }
    return(
      <div>
        <Card
          renderHeader={this.renderHeader}
          renderButtons={this.renderButtons}
        />
      </div>
    )
  }
}
