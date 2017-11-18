import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Invite from './Invite/Invite'
import Thanks from './Thanks/Thanks'
import Summary from './Summary/Summary'

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
