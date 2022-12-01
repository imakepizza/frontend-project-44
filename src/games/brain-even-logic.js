import { gameLogic, ROUNDS_COUNT } from '../index.js';
import getRandomInteger from '../utils.js';

const generateRound = () => {
  const numberToGuess = getRandomInteger(0, 100);
  const question = `${numberToGuess}`;
  const answer = numberToGuess % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
export default () => {
  const gameData = [];
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    gameData.push(generateRound());
  }
  gameLogic(description, gameData);
};
