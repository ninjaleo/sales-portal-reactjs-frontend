const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const REGISTERATION_PENDING = 'REGISTERATION_PENDING';
const REGISTERATION_SUCCESS = 'REGISTERATION_SUCCESS';
const REGISTERATION_ACTIVATED = 'REGISTERATION_ACTIVATED';
const REGISTERATION_USER_FOUND = 'REGISTERATION_USER_FOUND';
const REGISTERATION_FAILED = 'REGISTERATION_FAILED';
const VIEW_QUOTES_SELECTED = 'VIEW_QUOTES_SELECTED';
const VIEW_QUOTES_SUCCESS = 'VIEW_QUOTES_SUCCESS';
const VIEW_QUOTES_FAILED = 'VIEW_QUOTES_FAILED';
const ADD_QUOTE_SUCCESS = 'ADD_QUOTE_SUCCESS';
const ADD_QUOTE_FAILED = 'ADD_QUOTE_FAILED';


export const loginPending = logininfo => ({
    type: LOGIN_PENDING,
    payload: logininfo
})

export const loginSuccess = logininfo => (
    {
        type: LOGIN_SUCCESS,
        payload: logininfo
    })

export const loginFailed = error => ({
    type: LOGIN_FAILED,
    payload: error
})

export const registerationPending = registerinfo => ({
    type: REGISTERATION_PENDING,
    payload: registerinfo
})

export const registerationSuccess = registerinfo => ({
    type: REGISTERATION_SUCCESS,
    payload: registerinfo
})

export const registerActivated = registerinfo => ({
    type: REGISTERATION_ACTIVATED,
    payload: registerinfo
})

export const registerUserFound = registerinfo => ({
    type: REGISTERATION_USER_FOUND,
    payload: registerinfo
})

export const registerationFailed = error => ({
    type: REGISTERATION_FAILED,
    payload: error
})

export const addQuoteSuccess = quoteDetails => ({
    type: ADD_QUOTE_SUCCESS,
    payload: quoteDetails
})

export const addQuoteFailed = error => ({
    type: ADD_QUOTE_FAILED,
    payload: error
})

export const viewQuotesSelected = userEmail => ({
    type: VIEW_QUOTES_SELECTED,
    payload: userEmail
})

export const viewQuotesSuccess = quoteDetails => ({
    type: VIEW_QUOTES_SUCCESS,
    payload: quoteDetails
})

export const viewQuotesFailed = error => ({
    type: VIEW_QUOTES_FAILED,
    payload: error
})