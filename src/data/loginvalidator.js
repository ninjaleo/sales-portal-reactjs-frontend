import { loginPending, loginSuccess, loginFailed } from '../actions/userAction'
import axios from 'axios';

function loginValidator(logincredentials) {
    console.log(logincredentials);
    return dispatch => {
        dispatch(loginPending());
        axios.post('http://localhost:3001/login', logincredentials)
            .then(
                response => {
                    const { status } = response.data;
                    if (status === "success") {
                        console.log("inside if cond.")
                        const { username, lastLoginDate } = response.data
                        dispatch(loginSuccess(username))
                    }
                    else if (status === "failed") {
                        console.log("inside elseif cond.")
                        const { message } = response.data;
                        dispatch(loginFailed(message))

                    }
                    else {
                        console.log("inside else cond.")
                        const message = "There is some problem while logging in. Please try after sometime."
                        dispatch(loginFailed(message));
                    }

                }
            )
    }
}

export default loginValidator;