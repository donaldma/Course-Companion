import * as React from 'react'
import {Link} from 'react-router-dom'
import SignInModal from './SignInModal'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }

  }
  handleModalClose = () => {
    this.setState({ showModal: false })
	}
  
	handleModalShow = () => {
    this.setState({ showModal: true })
  }
  
  logout = () => {
    window.localStorage.clear()
    this.props.getUser()
  }
  
  render() {
    let rightNav
    if(!window.localStorage.userId) {
      rightNav =             
      <ul className="nav navbar-nav navbar-right">
        <li className="full-nav"><Link to='/'>About</Link></li>
        <li className="full-nav"><Link to='#' onClick={() => this.handleModalShow()}>Sign in</Link></li>
      </ul>
    } else {
      rightNav =             
      <ul className="nav navbar-nav navbar-right">
        <li className="full-nav"><Link to='#' onClick={() => this.logout()}>Sign out</Link></li>
      </ul>
    }

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
            {rightNav}
          </div>
        </div>
        <SignInModal 
          showModal={this.state.showModal}
          handleModalShow={this.handleModalShow}
          handleModalClose={this.handleModalClose}
          getUser={this.props.getUser}
        />
      </nav>
    )
  }
  
}

export default NavigationBar
