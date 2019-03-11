export const ADD_GAME = 'ADD_GAME';

let nextGameId = 0;

export function addGame(value) {
    return {
        type: ADD_GAME,
        value,
        id: nextGameId++
    };
}