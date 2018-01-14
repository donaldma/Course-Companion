import React from 'react'
import NavigationBar from './NavigationBar.js'
import ProfilePanel from './ProfilePanel.js'
import CourseList from './CourseList.js'

export default class App extends React.Component {
  render () {
    return (
			<div>
				<NavigationBar />
				<div className='container home-container'>
					<div className='row'>
						<div className='col-xs-12 col-md-5'>
							<ProfilePanel />
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
