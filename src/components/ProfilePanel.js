import React  from "react";

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        {/* edit dynamic pic source */}
        <img id = "profilePic" src="ADD PIC SOURCE" alt="Profile Picture"/> 
        {/* edit dynamic profile name source */}
        <h2>PROFILE NAME</h2> 
        {/* make dynamic content */}
        <ul>
            <li> UBC </li>
            <li> Cognitive Systems </li>
            <li> 4th Year </li>
            <li> May 2018 </li>
        </ul>
        
      </div>
    );
  }
}
 