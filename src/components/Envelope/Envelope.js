import React, { Component } from 'react'
import './Envelope.css'

class Envelope extends Component {

  render () {
    return(
      <div className='envelope-container'>
        {this.props.children}
      </div>
    )
  }
}

export default Envelope
