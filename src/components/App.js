import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Invite from './Invite/Invite'
import Thanks from './Thanks/Thanks'
import Summary from './Summary/Summary'
import Links from './Links/Links'
import Info from './Info/Info'

const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/summary' component={Summary} />
    <Route exact path='/links' component={Links} />
    <Route exact path='/thanks' component={Thanks} />
    <Route exact path='/info' component={Info} />
    <Route path='/invite/:alias' component={Invite} />
  </Switch>
)

export default App
