import React  from "react";
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Paper from 'material-ui/Paper';
import Slider from 'react-slick';

export default class CourseList extends React.Component {
  render() {
    const imgSrc = 'https://23916-presscdn-pagely.netdna-ssl.com/wp-content/uploads/StrangerDanger.jpg'
    const courseName = 'PSYC 300 001'
    const styles = {
      slide: {
        padding: 15,
        minHeight: 200,
        color: '#000',
      },
      slide1: {
        backgroundColor: '#FEA900',
      },
      slide2: {
        backgroundColor: '#B3DC4A',
      },
      slide3: {
        backgroundColor: '#6AC0FF',
      },
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (

      <div>
        <Slider {...settings}>


          <div className='course-list-container' >
              <Subheader style={{fontWeight: '600', color: 'black', fontSize: '20px'}}>{courseName}</Subheader>
              <Paper style={{maxHeight: 300, overflow: 'auto'}}>
                <List>

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
                  <ListItem
                    primaryText="Jengaman"
                    leftAvatar={<Avatar src={imgSrc} />}
                    />
                    <ListItem
                      primaryText="Jones"
                      leftAvatar={<Avatar src={imgSrc} />}
                      />
                </List>
              </Paper>
          </div>

          <div className='course-list-container' style={Object.assign({}, styles.slide, styles.slide2)}>
              <Subheader style={{fontWeight: '600', color: 'black', fontSize: '20px'}}>{courseName}</Subheader>
              <Paper style={{maxHeight: 300, overflow: 'auto'}}>
                <List>

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
                  <ListItem
                    primaryText="Jengaman"
                    leftAvatar={<Avatar src={imgSrc} />}
                    />
                    <ListItem
                      primaryText="Jones"
                      leftAvatar={<Avatar src={imgSrc} />}
                      />
                </List>
              </Paper>
          </div>


          <div className='course-list-container' style={Object.assign({}, styles.slide, styles.slide3)}>
              <Subheader style={{fontWeight: '600', color: 'black', fontSize: '20px'}}>{courseName}</Subheader>
              <Paper style={{maxHeight: 300, overflow: 'auto'}}>
                <List>

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
                  <ListItem
                    primaryText="Jengaman"
                    leftAvatar={<Avatar src={imgSrc} />}
                    />
                    <ListItem
                      primaryText="Jones"
                      leftAvatar={<Avatar src={imgSrc} />}
                      />
                </List>
              </Paper>
          </div>

        </Slider>
      </div>
    )
  }
}
