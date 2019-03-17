import {
    PICK_WINNER
} from '../actions';

const initialState = {
    teams: [
        { location: 'Golden State', name: 'Warriors', conference: 'West', seed: 1 },
        { location: 'Denver', name: 'Nuggets', conference: 'West', seed: 2 },
        { location: 'Houston', name: 'Rockets', conference: 'West', seed: 3 },
        { location: 'Oklahoma City', name: 'Thunder', conference: 'West', seed: 4 },
        { location: 'Portland', name: 'Trail Blazers', conference: 'West', seed: 5 },
        { location: 'Utah', name: 'Jazz', conference: 'West', seed: 6 },
        { location: 'Los Angeles', name: 'Clippers', conference: 'West', seed: 7 },
        { location: 'San Antonio', name: 'Spurs', conference: 'West', seed: 8 },
        { location: 'Milwaukee', name: 'Bucks', conference: 'East', seed: 1 },
        { location: 'Toronto', name: 'Raptors', conference: 'East', seed: 2 },
        { location: 'Philadelphia', name: '76ers', conference: 'East', seed: 3 },
        { location: 'Indiana', name: 'Pacers', conference: 'East', seed: 4 },
        { location: 'Boston', name: 'Celtics', conference: 'East', seed: 5 },
        { location: 'Detroit', name: 'Pistons', conference: 'East', seed: 6 },
        { location: 'Brooklyn', name: 'Nets', conference: 'East', seed: 7 },
        { location: 'Miami', name: 'Heat', conference: 'East', seed: 8 }
    ],
    winners: {
        finals: {
            champion: {}
        },
        west: {
            roundOne: [],
            semis: [],
            finals: [],
            winner: []
        },
        east: {
            roundOne: [],
            semis: [],
            finals: [],
            winner: []
        }
    }
};

function playoffReducer(state = initialState, action) {
    switch(action.type) {
        case PICK_WINNER: 
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default playoffReducer;