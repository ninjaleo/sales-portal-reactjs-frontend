import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import React, { Component } from 'react';
import { testedResult, PasswordStrengthMeter } from './PasswordStrengthMeter';
import AddressInput from 'material-ui-address-input'
import Alert from '@material-ui/lab/Alert';

class register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: '',
                confirmPassword: '',
                username: '',
                address: '',
                addresses: []
            }
        }
    }

    validatorRef = React.createRef();
    emailRef = React.createRef();
    nameRef = React.createRef();
    passwordRef = React.createRef();
    confirmPwdRef = React.createRef();

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleAddAddress = (address) => {
        const { formData } = this.state;
        formData.addresses = [...formData.addresses, address];
        this.setState({ formData });
    }

    handleChangeAddress = addressIndex => {
        const { formData } = this.state;
        formData.address = addressIndex;
        this.setState({ formData });
    }

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            const { formData } = this.state;
            if (value !== formData.password) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('nameValid', (value) => {
            if (value.length > 4) {
                return true;
            }
            return false;
        });
        ValidatorForm.addValidationRule('passwordStrength', () => {
            if (testedResult.score > 2) {
                return true;
            }
            return false;
        });
    }

    handleBlurForName = (event) => {
        this.nameRef.current.validate(event.target.value);
    }
    handleBlurForEmail = (event) => {
        this.emailRef.current.validate(event.target.value);
    }
    handleBlurForPassword = (event) => {
        this.passwordRef.current.validate(event.target.value);
    }
    handleBlurForConfirmPwd = (event) => {
        this.confirmPwdRef.current.validate(event.target.value);
    }

    handleSubmit = () => {
        const { email, password, username, address } = this.state.formData;
        console.log("Email:" + email);
        console.log("password:" + password);
        console.log("user name:" + username);
        console.log("address:" + address);
        this.props.handleUserRegistration(this.state.formData);
    }

    render() {
        const { formData } = this.state;
        return (
            <div>
                <Container maxWidth="xs">
                    <CssBaseline />
                    {this.props.message !== "" && this.props.message !== null && this.props.message !== undefined ? <Alert severity="error">{this.props.message}</Alert> : ''}
                    <div>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <ValidatorForm
                            onSubmit={this.handleSubmit}
                            instantValidate={false}
                        >
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                autoFocus
                                ref={this.nameRef}
                                name="username"
                                label="Full Name"
                                id="username"
                                onBlur={this.handleBlurForName}
                                onChange={this.handleChange}
                                value={formData.username}
                                validators={['nameValid', 'required']}
                                errorMessages={['Name should be minimum 5 Character', 'this field is required']}
                            />
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                ref={this.emailRef}
                                onBlur={this.handleBlurForEmail}
                                onChange={this.handleChange}
                                value={formData.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                ref={this.passwordRef}
                                onChange={this.handleChange}
                                onBlur={this.handleBlurForPassword}
                                value={formData.password}
                                validators={['required', 'passwordStrength']}
                                errorMessages={['this field is required', 'Password should be Good/Strong']}
                                helperText="Minimum length 6, Required Special character / Upper case"
                            />
                            <PasswordStrengthMeter password={formData.password} />
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                ref={this.confirmPwdRef}
                                validators={['isPasswordMatch', 'required']}
                                errorMessages={['password mismatch', 'this field is required']}
                                onChange={this.handleChange}
                                onBlur={this.handleBlurForConfirmPwd}
                                value={formData.confirmPassword}
                            />
                            <AddressInput
                                margin="dense"
                                onAdd={this.handleAddAddress}
                                onChange={this.handleChangeAddress}
                                value={formData.address}
                                allAddresses={formData.addresses}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign Up
                            </Button>
                        </ValidatorForm>
                    </div>
                </Container>
            </div>
        );
    }
}

export default register;