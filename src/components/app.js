import React from 'react'
import { Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar.js'
import ProfilePanel from './ProfilePanel.js'
import Calendar from './Calendar.js'

export default class App extends React.Component {
  render () {
    return (    
			<div>
				<NavigationBar />
				<ProfilePanel />
				<Calendar />
			</div>
    )
  }
}