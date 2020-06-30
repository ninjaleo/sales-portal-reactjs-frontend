import { loginSuccess, loginFailed } from "../actions/userAction";

const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";

export const loginreducer = (state = { loginStatus: "NONE" }, action) => {
  // write Reducers to handle the actions.
  console.log("action name:" + action.payload);
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        userName: action.payload,
        isLoggedIn: false,
        loginStatus: "PENDING",
      };
    case LOGIN_SUCCESS:
      return {
        userName: action.payload,
        isLoggedIn: true,
        loginStatus: "SUCCESS",
      };
    case LOGIN_FAILED:
      return {
        message: action.payload,
        isLoggedIn: false,
        loginStatus: "FAILED",
      };
    default:
      return state;
  }
};

export function setGoogleLogin(user) {
  return (dispatch) => {
    if (user && user.emailVerified) {
      dispatch(loginSuccess(user.displayName));
    } else if (user === null) {
      dispatch(loginFailed());
    }
  };
}
