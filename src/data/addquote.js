import { addQuoteSubmitted, addQuoteSuccess, addQuoteFailed } from '../actions/userAction'
import axios from 'axios';

function addQuote(loanInfo) {
    
    return dispatch => {
        axios.post('http://localhost:3001/createQuote', loanInfo)
            .then(
                response => {
                    const { data } = response.data;
                    if (data.quoteId !== " ") {
                        dispatch(addQuoteSuccess(response.data))
                    }
                    else{
                        const { message } = response.data;
                        dispatch(addQuoteFailed(message))
                    }
                }
            )
    }
}

export default addQuote;