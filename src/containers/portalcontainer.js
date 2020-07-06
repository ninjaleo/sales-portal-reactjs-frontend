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
            return(
                <SalesPortal 
                    handleViewQuotes={this.handleViewQuotes}
                    handleAddQuote={this.handleAddQuote}
                    userName={this.props.userName} 
                    signOut={this.props.signOut}/>
            );
    }
}

const mapStateToProps = state => {
    const { isAddQuote, isViewQuotes, isAddQuoteSubmitted } = state.portalreducer;
    console.log("mapStateToProps:" + isAddQuote + ":" + isViewQuotes + ":" + isAddQuoteSubmitted);
    return {
        isAddQuote,
        isViewQuotes,
        isAddQuoteSubmitted
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addQuote: addQuote,
    viewQuotes: viewQuotes
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PortalContainer);

