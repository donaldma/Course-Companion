import React  from 'react'
import Dropzone from 'react-dropzone'
import {List, ListItem} from 'material-ui/List'
import axios from 'axios'

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      accepted: []
    }

  }

  handleUpload =  () => {
    var file = this.state.accepted[0]
    if(file && file.type !== 'text/calendar') {
      return alert('text/calendar file types only')
    } else if(!file) {
      return alert('Please upload a file')
    }

    axios.get(`https://donaldma-api.herokuapp.com/api/ical/upload?fileName=${window.localStorage.userId}&fileType=${file.type}`)
    .then( (result) => {
      var signedUrl = result.data
      var options = {
        headers: {
          'Content-Type': file.type
        }
      }

      return axios.put(signedUrl, file, options)
    })
    .then(function (result) {
      console.log(result)
    })
    .catch(function (err) {
      console.log(err)
    })
    this.setState({ accepted: [] })
  }

  render() {
    let imgSrc, name, dropzoneRef
    if(this.props.user) {
      imgSrc = this.props.user.image
      name = this.props.user.name
    } else {
      imgSrc = 'https://23916-presscdn-pagely.netdna-ssl.com/wp-content/uploads/StrangerDanger.jpg'
      name = 'Anon'
    }

    const uploadStyles = {
      width: '100%',
      height: '100px',
      borderWidth: '2px',
      borderColor: '#666',
      borderStyle: 'dashed',
      borderRadius: '5px',
      marginBottom: '1em'
    }

    const schoolName = 'UBC'
    const major = 'Cognitive Systems'
    const year = '4th Year'
    const gradYear = 'May 2018'

    return (
      <div className='profile-panel-container'>
        <div className='img-container'>
          <div className='img-circle' style={{backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover'}}/>
          <h3 className='f-s-22'>{name}</h3> 
        </div>
        <List>
          <div className='flex'><img src='/img/SchoolName.png' className='flex-left'/><ListItem primaryText={schoolName} className='flex-right'/></div>
          <div className='flex'><img src='/img/Major.png' className='flex-left'/><ListItem primaryText={major} className='flex-right'/></div>
          <div className='flex'><img src='/img/Year.png' className='flex-left'/><ListItem primaryText={year} className='flex-right'/></div>
          <div className='flex'><img src='/img/GradYear.png' className='flex-left'/><ListItem primaryText={gradYear} className='flex-right'/></div>
        </List>
        {
          window.localStorage.userId ? 
          <div style={{textAlign: 'center'}}> 
            <Dropzone style={uploadStyles} 
                      onDrop={(accepted, rejected) => this.setState({ accepted: accepted })}>
                <p style={{paddingTop: '2.5em'}}>{this.state.accepted.length > 0 ? this.state.accepted[0].name : 'Drop files here.'}</p>
            </Dropzone>
            <button type='button' className='btn btn-default' onClick={() => this.handleUpload() }>
              Upload
            </button>
          </div>
          : undefined
        }
        
      </div>
    )
  }
}

export default Profile