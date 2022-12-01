import { gameLogic, ROUNDS_COUNT} from '../index.js';
import getRandomInteger from '../utils.js';

const gcd = (num1, num2) => {
  let temp = 0;
  let n1 = num1;
  let n2 = num2;
  while (n2) {
    temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }
  return n1;
};
const generateRound = () => {
  const firstNumber = getRandomInteger(0, 100);
  const secondNumber = getRandomInteger(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = (gcd(firstNumber, secondNumber)).toString();
  return [question, answer];
};
export default () => {
  const gameData = [];
  const description = 'Find the greatest common divisor of given numbers.';
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    gameData.push(generateRound());
  }
  gameLogic(description, gameData);
};
