import {
    ADD_GAME
} from '../actions';

const initialState = {
    games: [
        {
            home: 'Bucks',
            away: 'Raptors'
        },
        {
            home: 'Warriors',
            away: 'Rockets'
        }
    ]
};

function gameReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_GAME: 
            const newGame = {
                home: 'Team 1',
                away: 'Team 2',
                id: action.id
            }
            return {
                ...state,
                games: [...state.games, newGame]
            };
        default:
            return state;
    }
};

export default gameReducer;