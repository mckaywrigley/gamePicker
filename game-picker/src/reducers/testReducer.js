import {
    TEST
} from '../actions';

const initialState = {
    text: ''
};

function testReducer(state = initialState, action) {
    switch(action.type) {
        case TEST: 
            return {
                ...state,
                text: 'working'
            };
        default:
            return state;
    }
};

export default testReducer;