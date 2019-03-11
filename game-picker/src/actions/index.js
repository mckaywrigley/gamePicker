export const ADD_GAME = 'ADD_GAME';
export const SELECT_GAME = 'SELECT_GAME'

let nextGameId = 0;

export function addGame(value) {
    return {
        type: ADD_GAME,
        value,
        id: nextGameId++
    };
}

export function selectGame(value) {
    return {
        type: SELECT_GAME,
        value
    }
}