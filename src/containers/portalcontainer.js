import { connect } from 'react-redux';
import React, { Component } from 'react';
import SalesPortal from '../components/salesportal'
import { bindActionCreators } from 'redux';
import addQuote from '../data/addquote';
import viewQuotes from '../data/viewquotes';
import portalreducer from '../reducers/portalreducer';

class PortalContainer extends Component {

    constructor(props) {
        super(props);
        this.handleAddQuote = this.handleAddQuote.bind(this);
        this.handleViewQuotes = this.handleViewQuotes.bind(this);
    }

    handleAddQuote = (loanInfo) => {
        this.props.addQuote(loanInfo);
    }

    handleViewQuotes = (userName) => {
        this.props.viewQuotes(userName);
    }

    render() {
        if (this.props.isAddQuoteSuccess || this.props.isViewSuccess || this.props.isViewQuotes) {
            return(
                <SalesPortal 
                    handleViewQuotes={this.handleViewQuotes}
                    handleAddQuote={this.handleAddQuote}
                    isAddQuoteSuccess={this.props.isAddQuoteSuccess}
                    isViewQuotesSelected={this.props.isViewQuotes}
                    isViewSuccess={this.props.isViewSuccess}
                    quoteDetails={this.props.quoteDetails}
                    userName={this.props.userName} 
                    signOut={this.props.signOut}/>
            );
        }
        else {
            return(
                <SalesPortal 
                    handleViewQuotes={this.handleViewQuotes}
                    handleAddQuote={this.handleAddQuote}
                    userName={this.props.userName} 
                    signOut={this.props.signOut}/>
            );
        }
    }
}

const mapStateToProps = state => {
    const { isAddQuoteSuccess, isViewQuotes, isViewSuccess, quoteDetails } = state.portalreducer;
    return {
        isAddQuoteSuccess,
        isViewQuotes,
        isViewSuccess,
        quoteDetails      
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addQuote: addQuote,
    viewQuotes: viewQuotes
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PortalContainer);

