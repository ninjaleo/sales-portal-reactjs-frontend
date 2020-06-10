import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import React, { Component } from 'react';
import RegisterContainer from '../containers/registercontainer';
import Alert from '@material-ui/lab/Alert';

class login extends Component {

    constructor(props) {
        super(props);
        console.log("props.message:" + props.message);
        console.log("props.message:" + props.registrationMessage);
        this.state = {
            formData: {
                email: '',
                password: ''
            },
            submitted: false,
            isChecked: false,
            isNewUser: false
        }
    }

    componentDidMount() {
        if (localStorage.checkbox && localStorage.email !== "") {
            this.setState({
                isChecked: true,
                formData: { email: localStorage.username, password: localStorage.password }
            })
        }
    }

    emailRef = React.createRef();

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleBlurForEmail = (event) => {
        //alert('sdfsdfsd');
        this.emailRef.current.validate(event.target.value);
    }

    handleSubmit = () => {
        const { email, password } = this.state.formData;
        const { isChecked } = this.state;
        console.log("Email:" + email);
        console.log("password:" + password);
        console.log("isChecked:" + isChecked);
        if (isChecked && email !== "") {
            localStorage.username = email
            localStorage.password = password
            localStorage.checkbox = isChecked
        }
        this.props.handleUserAuthentication(this.state.formData);
    }

    onChangeCheckbox = event => {

        console.log("isCheckBoxselected:" + event.target.checked);
        this.setState({
            isChecked: event.target.checked
        })

    }

    handleSignup = () => {
        this.setState({
            isNewUser: true
        });
    }

    render() {
        const { formData } = this.state;
        if (this.state.isNewUser) {
            return (
                <RegisterContainer />
            )
        }
        else {
            return (
                <div>
                    <Container maxWidth="xs">
                        <CssBaseline />
                        {this.props.message !== "" && this.props.message !== null && this.props.message !== undefined ? <Alert severity="error">{this.props.message}</Alert> : ''}
                        {this.props.registrationMessage !== "" && this.props.registrationMessage !== null && this.props.registrationMessage !== undefined ? <Alert severity="success">{this.props.registrationMessage}</Alert> : ''}
                        <div>
                            <Typography component="h1" variant="h5">
                                Login
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
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
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
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                    value={formData.password}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                    onClick={this.onChangeCheckbox}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Sign In
                    </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                    </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2" onClick={this.handleSignup}>
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </ValidatorForm>
                        </div>
                    </Container>
                </div>
            )
        }
    }
}

export default login;