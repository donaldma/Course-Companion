import React  from "react";
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class CourseList extends React.Component {
  render() {
    const imgSrc = 'https://23916-presscdn-pagely.netdna-ssl.com/wp-content/uploads/StrangerDanger.jpg'
    const courseName = 'PSYC 300 001'

    return (
      <div className='course-list-container'>
        <List>
          <Subheader style={{fontWeight: '600', color: 'black', fontSize: '20px'}}>{courseName}</Subheader>
          <ListItem
            primaryText="Felix"
            leftAvatar={<Avatar src={imgSrc} />}
          />
          <ListItem
            primaryText="Stanford"
            leftAvatar={<Avatar src={imgSrc} />}
          />
          <ListItem
            primaryText="Donald"
            leftAvatar={<Avatar src={imgSrc} />}
          />
          <ListItem
            primaryText="Irem"
            leftAvatar={<Avatar src={imgSrc} />}
          />
        </List>
        
      </div>
    )
  }
}
 