import React from 'react';
import './Game.scss';

const Game = props => {
 return (
    <div className="game">
        <p>{props.home} vs. {props.away}</p>
    </div>
 );
}

export default Game;