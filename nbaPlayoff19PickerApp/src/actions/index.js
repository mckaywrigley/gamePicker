export const PICK_WINNER = 'ADD_GAME';

export function pickWinner(value) {
    return {
        type: PICK_WINNER,
        value
    };
}