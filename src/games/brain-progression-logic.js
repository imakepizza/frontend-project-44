import { gameLogic, ROUNDS_COUNT } from '../index.js';
import getRandomInteger from '../utils.js';

const fillsUpNumberProgression = () => {
  const arr = [];
  const endOfRange = 10;
  const step = getRandomInteger(0, 9) + 1;
  const start = getRandomInteger(0, 150);
  const end = start + step * endOfRange;
  for (let i = start; i < end; i += step) {
    arr.push(i);
  }
  return arr;
};
const generateRound = () => {
  const question = fillsUpNumberProgression();
  const spacedNumber = getRandomInteger(0, 9);
  const answer = `${question[spacedNumber]}`;
  question[spacedNumber] = '..';

  return [question.join(' '), answer];
};
export default () => {
  const gameData = [];
  const description = 'What number is missing in the progression?';
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    gameData.push(generateRound());
  }
  gameLogic(description, gameData);
};
