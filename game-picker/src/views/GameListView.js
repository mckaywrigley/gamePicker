import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGame } from '../actions';
import Game from '../components/Game'
import './GameListView.scss';

class GameListView extends Component {
    constructor() {
        super();
        this.state = {
            newGame: {
                home: '',
                away: ''
            }
        }
    }

    render() {
        return (
            <div className="game-list-view">
                <h2>Tonight's Games</h2>
                <ul>
                     {
                         this.props.games.map((game) => {
                            return (
                                <Game 
                                    home={game.home}
                                    away={game.away}
                                    key={game.id}
                                />
                            );
                         })
                     }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        games: state.gameReducer.games
    }
};

export default connect (
    mapStateToProps,
    {
        addGame
    }
)(GameListView);