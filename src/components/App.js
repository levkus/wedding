import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Invite from './Invite'
import Thanks from './Thanks'
import Summary from './Summary'

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/summary' component={Summary} />
      <Route exact path='/thanks' component={Thanks} />
      <Route path='/invite/:id' component={Invite} />
    </Switch>
  </main>
)

export default App
