import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameListView extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                Game List View
            </>
        );
    }
}

const mapStateToProps = state => {
    return (
        // state
    );
}

export default connect (
    mapStateToProps,
    {
        // action
    }
)(GameListView);