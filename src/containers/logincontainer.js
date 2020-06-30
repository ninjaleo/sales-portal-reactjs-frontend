import { connect } from 'react-redux';
import React, { Component } from 'react';
import Login from '../components/login'
import SalesPortal from '../components/salesportal'
import { bindActionCreators } from 'redux';
import loginvalidator from '../data/loginvalidator';
import Pending from '../components/pending';
import {setGoogleLogin} from '../reducers/loginreducer';
import * as firebase from "firebase";
import firebaseConfig from "../config/firebase.config";

firebase.initializeApp(firebaseConfig);

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.handleUserAuthentication = this.handleUserAuthentication.bind(this);
        this.handleGoogleLogin=this.handleGoogleLogin.bind(this);
    }

    handleUserAuthentication = (logincredentials) => {
        this.props.loginvalidator(logincredentials);

    }
    handleGoogleLogin=(user)=>{
        this.props.setGoogleLogin(user);
    }
    signOut = () => {
        firebase.auth().signOut();
        this.props.setGoogleLogin(null);
      };

    render() {
        //console.log("hello:" + this.props.loginStatus + ":" + this.props.isLoggedIn + ":" + this.props.userName)
        let UIComponent = <Login handleUserAuthentication={this.handleUserAuthentication} handleGoogleLogin={this.handleGoogleLogin}/>;
        if (this.props.isLoggedIn) {
            if (this.props.loginStatus === "SUCCESS") {
                console.log("hello:" + this.props.loginStatus + ":" + this.props.isLoggedIn + ":" + this.props.userName)
                UIComponent = <SalesPortal userName={this.props.userName} signOut={this.signOut}/>
            }
        }
        else {
            if (this.props.loginStatus === "PENDING") {
                UIComponent = <Pending />
            }
            if (this.props.loginStatus === "FAILED") {
                UIComponent = <Login handleUserAuthentication={this.handleUserAuthentication} handleGoogleLogin={this.handleGoogleLogin} message={this.props.message} />
            }

        }

        if (this.props.registrationMessage !== '' && this.props.registrationMessage !== null && this.props.registrationMessage !== undefined) {
            UIComponent = <Login handleUserAuthentication={this.handleUserAuthentication} handleGoogleLogin={this.handleGoogleLogin} registrationMessage={this.props.registrationMessage} />;
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
    loginvalidator: loginvalidator,
    setGoogleLogin:setGoogleLogin,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

