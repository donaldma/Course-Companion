import * as React from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import FacebookLogin from 'react-facebook-login'
import axios from 'axios'

class SignInModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path: undefined
    }
  }

  facebookLogin(response) {
    axios.post('https://donaldma-api.herokuapp.com/api/user/login/facebook', { access_token: response.accessToken }).then(result => {
      if (result.error) {
        console.log(error)
      } else {
        window.localStorage.userId = result.data.user[0].id
        this.props.getUser(result.data.user[0].id)
        this.props.handleModalClose()
      }
    })
  }


  render() {
    let mainContent
    if (this.state.currentPage === 'register') {
      mainContent = (
        <FacebookLogin
          appId={1153731794732054}
          autoLoad={false}
          callback={response => this.facebookLogin(response) }
          cssClass='btn login-button'
          textButton='Register with Facebook'
        />
      )
    } else {
      mainContent = (
        <FacebookLogin
          appId={1153731794732054}
          autoLoad={false}
          callback={response => this.facebookLogin(response) }
          cssClass='btn login-button'
          textButton='Login with Facebook'
        />
      )
    } 

    return (
      <Modal className='sign-in-modal' show={this.props.showModal} onHide={() => this.props.handleModalClose()}>
        <Modal.Body>
          <div className='row' id='sign-in-modal'>
            <img src='/img/Logo.png' className='m-b-2'/>
            {mainContent}
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SignInModal