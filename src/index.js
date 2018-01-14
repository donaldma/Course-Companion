import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.js'
import './styles/app.scss'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
  , document.getElementById('main'))
