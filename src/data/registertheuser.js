import { registerationSuccess, registerationPending, registerationFailed } from '../actions/userAction'
import axios from 'axios';

function registerTheUser(userinfo) {
    const { username, email, password, address, addresses } = userinfo;
    console.log("User Name Is:" + username)
    console.log("Address Is:" + addresses[address])
    console.log("Email Is:" + email)
    console.log("Password Is:" + password)
    return dispatch => {
        dispatch(registerationPending());
        axios.post('http://localhost:3001/signup', userinfo)
            .then(
                response => {
                    const { status, message } = response.data;
                    if (status === "success") {
                        console.log("inside if cond.")
                        dispatch(registerationSuccess(message))
                    }
                    else if (status === "failed") {
                        console.log("inside elseif cond.")
                        dispatch(registerationFailed(message));

                    }
                    else {
                        console.log("inside else cond.")
                        const message = "There is some problem while logging in. Please try after sometime."
                        dispatch(registerationFailed(message));
                    }
                    console.log(response.data.status);
                    console.log("hiii");
                    //console.log(loginSuccess(response.data));

                }
            )
        //setTimeout(()=>{dispatch(registerActivated())}, 5000);
        //dispatch(registerActivated());
    }
}

export default registerTheUser;