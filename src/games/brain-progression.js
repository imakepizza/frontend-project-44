import { runEngine, ROUNDS_COUNT } from '../index.js';
import getRandomInteger from '../utils.js';

const makeProgression = (step, start, length) => {
  const arr = [];
  let temp = start;
  for (let i = 0; i < length; i += 1) {
    arr.push(temp);
    temp += step;
  }
  return arr;
};

const generateRound = () => {
  const step = getRandomInteger(1, 10);
  const start = getRandomInteger(0, 150);
  const length= 10
  const progression = makeProgression(step, start, length);
  const spacedNumber = getRandomInteger(0, 10);
  const answer = `${progression[spacedNumber]}`;
  progression[spacedNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  const gameData = [];
  const gameRules = 'What number is missing in the progression?';
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    gameData.push(generateRound());
  }
  runEngine(gameRules, gameData);
};
