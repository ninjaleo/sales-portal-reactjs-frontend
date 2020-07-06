const ADD_QUOTE_SELECTED = 'ADD_QUOTE_SELECTED';
const VIEW_QUOTES_SELECTED = 'VIEW_QUOTES_SELECTED';
const ADD_QUOTE_SUBMITTED = 'ADD_QUOTE_SUBMITTED';

const portalreducer = (state = { isAddQuote: false, isViewQuotes: false},
    action) => {
    // write Reducers to handle the actions.
    switch (action.type) {
        case ADD_QUOTE_SELECTED:
            return (
                {
                    isAddQuote: true
                });
        case VIEW_QUOTES_SELECTED:
            return (
                {
                    isViewQuotes: true,
                    isAddQuoteSubmitted: false
                });
        case ADD_QUOTE_SUBMITTED:
            return (
                {
                    isAddQuoteSubmitted: true,
                    isViewQuotes: false
                });
        default:
            return state;

    }
}

export default portalreducer;