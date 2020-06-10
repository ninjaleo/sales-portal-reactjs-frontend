import { connect } from 'react-redux';
import React, { Component } from 'react';
import Login from '../components/login'
import SalesPortal from '../components/salesportal'
import { bindActionCreators } from 'redux';
import loginvalidator from '../data/loginvalidator';
import Pending from '../components/pending'

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.handleUserAuthentication = this.handleUserAuthentication.bind(this);
    }

    handleUserAuthentication = (logincredentials) => {
        this.props.loginvalidator(logincredentials);

    }

    render() {
        //console.log("hello:" + this.props.loginStatus + ":" + this.props.isLoggedIn + ":" + this.props.userName)
        let UIComponent = <Login handleUserAuthentication={this.handleUserAuthentication} />;
        if (this.props.isLoggedIn) {
            if (this.props.loginStatus === "SUCCESS") {
                console.log("hello:" + this.props.loginStatus + ":" + this.props.isLoggedIn + ":" + this.props.userName)
                UIComponent = <SalesPortal userName={this.props.userName} />
            }
        }
        else {
            if (this.props.loginStatus === "PENDING") {
                UIComponent = <Pending />
            }
            if (this.props.loginStatus === "FAILED") {
                UIComponent = <Login handleUserAuthentication={this.handleUserAuthentication} message={this.props.message} />
            }

        }

        if (this.props.registrationMessage !== '' && this.props.registrationMessage !== null && this.props.registrationMessage !== undefined) {
            UIComponent = <Login handleUserAuthentication={this.handleUserAuthentication} registrationMessage={this.props.registrationMessage} />;
        }

        return (
            UIComponent
        );
    }
}

const mapStateToProps = state => {
    const { isLoggedIn, loginStatus, userName, message } = state.loginreducer;
    console.log("mapStateToProps:" + userName + ":" + isLoggedIn + ":" + loginStatus + ":" + message);
    return {
        isLoggedIn,
        loginStatus,
        userName,
        message
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loginvalidator: loginvalidator
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

