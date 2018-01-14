import React  from "react";

export default class Profile extends React.Component {
  render() {
    return (
      <div className='profile-panel-container'>
        <div className='img-container'>
          <div className='img-circle' />
          <h3 className='f-s-22'>PROFILE NAME</h3> 
        </div>
        <ul>
            <li> UBC </li>
            <li> Cognitive Systems </li>
            <li> 4th Year </li>
            <li> May 2018 </li>
        </ul>
        
      </div>
    )
  }
}
 