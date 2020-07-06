import { viewQuotesSelected } from '../actions/userAction'
import axios from 'axios';

function viewQuotes(userName) {
    
    return dispatch => {
        console.log("view quotes dispatched" + userName);
        dispatch(viewQuotesSelected());
    }
}

export default viewQuotes;