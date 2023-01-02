import { runEngine, ROUNDS_COUNT } from '../index.js';
import getRandomInteger from '../utils.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = `${getRandomInteger(0, 500)}`;
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const gameData = [];
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    gameData.push(generateRound());
  }
  runEngine(gameRules, gameData);
};
