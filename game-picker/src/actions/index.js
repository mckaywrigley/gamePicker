export const TEST = 'TEST';

export function test(value) {
    return {
        type: TEST,
        value
    };
}