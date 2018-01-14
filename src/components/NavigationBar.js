import * as React from 'react'
import {Link} from 'react-router-dom'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container m-t">
          <div className="navbar-header">
            <ul className="navbar-toggle nav-logo">
              <li><Link to='/'>Course Companion</Link></li>
            </ul> 
            <button type="button" className="navbar-toggle nav-menu" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="full-nav"><Link to='/'>Course Companion</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="full-nav"><Link to='/'>About</Link></li>
              <li className="full-nav"><Link to='/'>Sign in</Link></li>
              <li className="mobile-nav"><a href='/'>About</a></li>
              <li className="mobile-nav"><a href='/'>Sign in</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
}

export default NavigationBar
