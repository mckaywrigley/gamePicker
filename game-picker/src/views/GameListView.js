import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test } from '../actions';

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
    return {
        text: state.text
    };
}

export default connect (
    mapStateToProps,
    {
        test
    }
)(GameListView);