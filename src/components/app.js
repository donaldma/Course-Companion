import React from 'react'
import { Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar.js'
import ProfilePanel from './ProfilePanel.js'
import CourseList from './CourseList.js'
import axios from 'axios'

class App extends React.Component {
	constructor(props) {
    super(props)

    this.state = {
			user: undefined
		}
	}

	componentDidMount() {
		if(window.localStorage.userId) {
			this.getUser(window.localStorage.userId)
		}
	}

	getUser = (id) => {
		if(!id) {
			this.setState({ user: undefined })
			return 			
		}
		axios.get(`https://donaldma-api.herokuapp.com/api/user/${id}`).then(result => {
      if (result.error) {
				console.log(result.error)
      } else {
        this.setState({ user: result.data })
      }
    })
	}
		
  render () {
    return (    
			<div>
				<NavigationBar user={this.state.user} getUser={this.getUser}/>
				<div className='container home-container'>
					<div className='row'>
						<div className='col-xs-12 col-md-5'>
							<ProfilePanel user={this.state.user}/>
						</div>
						<div className='col-xs-12 col-md-7'>
							<CourseList />
						</div>
					</div>
				</div>
			</div>
    )
  }
}

export default App