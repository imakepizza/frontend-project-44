import gameLogic from '../index.js';
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

export default () => {
  const description = 'What number is missing in the progression?';
  const gameData = [];
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = fillsUpNumberProgression();
    const result = [];
    const spacedNumber = getRandomInteger(0, 9);
    const answerGame = `${question[spacedNumber]}`;
    question[spacedNumber] = '..';

    result.push(question.join(' '));
    result.push(answerGame);
    gameData.push(result);
  }
  gameLogic(description, gameData);
};
