import { runEngine, ROUNDS_COUNT } from '../index.js';
import getRandomInteger from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const numberToGuess = getRandomInteger(0, 100);
  const question = `${numberToGuess}`;
  const answer = isEven(numberToGuess) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const gameData = [];
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    gameData.push(generateRound());
  }
  runEngine(gameRules, gameData);
};
