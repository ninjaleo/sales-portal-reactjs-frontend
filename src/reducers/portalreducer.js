const ADD_QUOTE_SUCCESS = 'ADD_QUOTE_SUCCESS';
const ADD_QUOTE_FAILED = 'ADD_QUOTE_FAILED';
const VIEW_QUOTES_SELECTED = 'VIEW_QUOTES_SELECTED';
const VIEW_QUOTES_SUCCESS = 'VIEW_QUOTES_SUCCESS';
const VIEW_QUOTES_FAILED = 'VIEW_QUOTES_FAILED';

const portalreducer = (state = { isAddQuoteSuccess: false, isViewQuotes: false},
    action) => {
    // write Reducers to handle the actions.
    switch (action.type) {
        case VIEW_QUOTES_SELECTED:
            return (
                {
                    isViewQuotes: true,
                });
        case VIEW_QUOTES_SUCCESS:
            return (
                {
                    isViewSuccess: true,
                    isViewQuotes: false,
                    isAddQuoteSuccess: false,
                    quoteDetails: action.payload
                });
        case VIEW_QUOTES_FAILED:
            return (
                {
                    isViewSuccess: false,
                    isViewQuotes: false,
                    isAddQuoteSuccess: false,
                    quoteDetails: action.payload
                });                
        case ADD_QUOTE_SUCCESS:
            return (
                {
                    quoteDetails: action.payload,
                    isViewQuotes: false,
                    isViewSuccess: false,
                    isAddQuoteSuccess: true
                });     
        case ADD_QUOTE_FAILED:
            return (
                {
                    quoteDetails: action.payload,
                    isViewQuotes: false,
                    isViewSuccess: false,
                    isAddQuoteSuccess: false,
                });            
        default:
            return state;

    }
}

export default portalreducer;