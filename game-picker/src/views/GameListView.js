import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test } from '../actions';
import Game from '../components/Game'

class GameListView extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Game />
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