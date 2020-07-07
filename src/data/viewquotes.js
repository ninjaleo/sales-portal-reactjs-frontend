import { viewQuotesSelected, viewQuotesSuccess, viewQuotesFailed } from '../actions/userAction'
import axios from 'axios';

function viewQuotes(userEmail) {
    
    return dispatch => {
        dispatch(viewQuotesSelected());
        axios.get('http://localhost:3001/getQuotes?userEmail=' + userEmail)
            .then(
                response => {
                    const data = response.data;
                    if (data.length > 0) {
                        dispatch(viewQuotesSuccess(data))
                    }
                    else{
                        const { message } = response.data;
                        dispatch(viewQuotesFailed(message))
                    }
                }
            )
    }
}

export default viewQuotes;