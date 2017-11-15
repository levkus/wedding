import React from 'react'
import axios from 'axios'

class App extends React.Component {
  send = () => {
    axios.post('http://api.cloudstitch.com/levkus/wedding', {
      name: 'LALALA',
      status: 'Olalal',
    }).then(resp => console.log(resp))
  }

  get = () => {
    const resp = require('../json/API Spreadsheet.json')
    console.log(resp)
  }

  render () {
    return(
      <div>
        <button onClick={this.send}>Send</button>
        <button onClick={this.get}>Get</button>
      </div>
    )
  }
}

export default App
