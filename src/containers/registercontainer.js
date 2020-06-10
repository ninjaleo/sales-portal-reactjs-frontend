import { connect } from 'react-redux';
import React, { Component } from 'react';
import Register from '../components/register';
//import EmailActivation from '../components/emailActivation';
//import EmailActivated from '../components/emailActivated';
import { bindActionCreators } from 'redux';
import registerTheUser from '../data/registertheuser';
import LoginContainer from '../containers/logincontainer'

class RegisterContainer extends Component {

    constructor(props) {
        super(props);
        this.handleUserRegistration = this.handleUserRegistration.bind(this);
    }

    handleUserRegistration = (userinfo) => {
        this.props.registerTheUser(userinfo);
    }

    render() {
        let UIComponent = <Register handleUserRegistration={this.handleUserRegistration} />;
        if (this.props.isRegistered) {
            /* if (this.props.isActivated) {
                UIComponent = <EmailActivated />
            }
            else
            {
                UIComponent = <EmailActivation />
            } */
            
            UIComponent = <LoginContainer registrationMessage={this.props.message} />
        }
        else {
            /*if (this.props.registerReason === 'USER_FOUND') {
                UIComponent = <Register handleUserRegistration={this.handleUserRegistration} />
            }
            else {
                UIComponent = <Register handleUserRegistration={this.handleUserRegistration} />
            }*/

            UIComponent = <Register handleUserRegistration={this.handleUserRegistration} message={this.props.message} />
        }

        return (
            UIComponent
        );
    }
}

const mapStateToProps = state => {
    const { isRegistered, isActivated, registerReason, message } = state.registerreducer;
    console.log("Message inside reg container component is:" + message);
    return {
        isRegistered,
        isActivated,
        registerReason,
        message
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    registerTheUser: registerTheUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);

