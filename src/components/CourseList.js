import React  from "react"
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import Paper from 'material-ui/Paper'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import * as actions from '../actions'

class CourseList extends React.Component {
  componentDidMount() {
    if(this.props.userId) {
      this.props.fetchCourses(this.props.userId)
    }
  }

  renderCourseCard() {
    const imgSrc = 'https://23916-presscdn-pagely.netdna-ssl.com/wp-content/uploads/StrangerDanger.jpg'

    this.props.courses.forEach(course => {
      // console.log(course)
      return (
        <div className='course-list-container' >
          <Subheader style={{fontWeight: '600', color: 'black', fontSize: '20px'}}>{course.courseName}</Subheader>
          <Paper style={{maxHeight: 300, overflow: 'auto'}}>
            <List>
  
              <ListItem
                primaryText="Stanford"
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
      )
    })
  }

  render() {
    console.log(this.props.courses)
    if(!this.props.courses) {
      return <div>Loading...</div>
    }

    const imgSrc = 'https://23916-presscdn-pagely.netdna-ssl.com/wp-content/uploads/StrangerDanger.jpg'
    const courseName = 'PSYC 300 001'
    const courseName2 = 'ASIA 371 003'
    const courseName3 = 'PSYC 361 101'
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

          {this.renderCourseCard()}

        </Slider>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    courses: state.courses
  }
}

export default connect(mapStateToProps, actions)(CourseList)