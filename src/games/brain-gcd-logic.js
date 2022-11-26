import gameLogic from '../index.js';
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
export default () => {
  const gameData = [];
  const description = 'Find the greatest common divisor of given numbers.';
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const result = [];
    const firstNumber = getRandomInteger(0, 100);
    const secondNumber = getRandomInteger(0, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const answerGame = (gcd(firstNumber, secondNumber)).toString();
    result.push(question);
    result.push(answerGame);
    gameData.push(result);
  }
  gameLogic(description, gameData);
};
