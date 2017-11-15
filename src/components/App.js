import React from 'react'
import axios from 'axios'

class App extends React.Component {
  send = () => {
    axios.post('http://api.cloudstitch.com/levkus/wedding', {
      Name: 'LALALA',
      Subject: 'Olalal',
      Message: 'LolOll'
    }).then(resp => console.log(resp))
  }

  get = () => {
    axios.get('http://api.cloudstitch.com/levkus/wedding').then(resp => console.log(resp))
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
