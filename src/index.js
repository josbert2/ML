import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import MyReferral from './components/MyReferral'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/dashboard"  component={App}></Route>
        <Route path="/login"  component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/my-referral" component={MyReferral}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
