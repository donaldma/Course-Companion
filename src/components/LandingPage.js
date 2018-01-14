import React from 'react';
import { withRouter } from 'react-router';

export default class LandingPage extends React.Component {
    login() {
        this.props.history.push('/app.js'); // for react-router@3 it would be this.props.router.push('/some/location');
    }

    render() {
        return (
            <div>
                <div className='container home-container'>

                	<div className='row'>
                        <div className='col-xs-12 col-md-12'>
                            <hgroup>
                              <h1>Course Companion Login</h1>
                            </hgroup>
                            <form>
                                <div className="group">
                                    <button type="button" className="button buttonBlue">Login with Facebook</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
