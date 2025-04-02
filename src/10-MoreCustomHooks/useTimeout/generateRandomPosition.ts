import { generateRandomNumber } from 'utils/generateRandomNumber';

export function generateRandomPosition() {
    return {
        x: generateRandomNumber(0, 100),
        y: generateRandomNumber(0, 100),
    };
}
