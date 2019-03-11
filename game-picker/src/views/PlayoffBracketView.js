import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectGame } from '../actions';
import './PlayoffBracketView.scss';

class PlayoffBracketView extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="playoff-bracket-view">
                <h2>Playoff Bracket</h2>
                <div className="west">
                    <h3>West</h3>
                    <p>{this.props.teams[0].name} vs. {this.props.teams[1].name}</p>
                    <p>{this.props.teams[2].name} vs. {this.props.teams[3].name}</p>
                    <p>{this.props.teams[4].name} vs. {this.props.teams[5].name}</p>
                    <p>{this.props.teams[6].name} vs. {this.props.teams[7].name}</p>
                </div>
                <div className="east">
                <h3>East</h3>
                    <p>{this.props.teams[8].name} vs. {this.props.teams[9].name}</p>
                    <p>{this.props.teams[10].name} vs. {this.props.teams[11].name}</p>
                    <p>{this.props.teams[12].name} vs. {this.props.teams[13].name}</p>
                    <p>{this.props.teams[14].name} vs. {this.props.teams[15
                    ].name}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        teams: state.playoffReducer.teams
    }
};

export default connect (
    mapStateToProps,
    {
        selectGame
    }
)(PlayoffBracketView);