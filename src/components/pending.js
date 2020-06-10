import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;

class Pending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div>
                <FadeLoader
                    size={20}
                    color={"Green"}
                    loading={this.state.loading}
                />
                <h1>Please wait while we authenticating you.....</h1>
            </div>
        );
    }
}

export default Pending;