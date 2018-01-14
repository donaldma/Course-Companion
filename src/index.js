import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.js'
import './styles/app.scss'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('main'))
