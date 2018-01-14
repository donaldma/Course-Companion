import React from 'react'
import { Button } from 'react-bootstrap';
import { Route, NavLink, HashRouter } from "react-router-dom";

{/* test, to be removed */}
import Home from './home'
import Stuff from './stuff'
import Contact from './contact'

import Profile from './profile'
import Calendar from './calendar'

export default class App extends React.Component {
  render () {
    return (
    <HashRouter>
        <div>
            <h1 className='f-s-48'>Welcome, Bootstrap is in!</h1>
            <Button>Test</Button>
            <h1>Simple Test</h1>

            {/* NAV COMPONENT */}
            <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/calendar" component={Calendar}/>
            </div>


            <Profile />
            <Calendar />
        </div>
    </HashRouter>
    );
  }
}
