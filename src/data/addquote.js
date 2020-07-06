import { addQuoteSubmitted } from '../actions/userAction'
import axios from 'axios';

function addQuote(loanInfo) {
    
    return dispatch => {
        dispatch(addQuoteSubmitted());
        console.log("Loan Amount:" + " " + loanInfo.loanAmount + "," + "Loan Tenure:" + " " + loanInfo.loanTenure);
    }
}

export default addQuote;