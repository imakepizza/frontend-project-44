import gameLogic from '../index.js';
import getRandomInteger from '../utils.js';

const calculatesWithChosenSign = (num1, num2, sign) => {
  if (sign === '+') {
    return (num1 + num2);
  }
  if (sign === '-') {
    return (num1 - num2);
  }
  return (num1 * num2);
};
export default () => {
  const gameData = [];
  const signs = ['+', '-', '*'];
  const description = 'What is the result of the expression?';
  for (let i = 0; i < 3; i += 1) {
    const result = [];
    const firstNumber = getRandomInteger(0, 25);
    const secondNumber = getRandomInteger(0, 25);
    const randSign = getRandomInteger(0, 2);
    const question = `${firstNumber} ${signs[randSign]} ${secondNumber}`;
    const answerGame = (
      calculatesWithChosenSign(firstNumber, secondNumber, signs[randSign])
    ).toString();
    result.push(question);
    result.push(answerGame);
    gameData.push(result);
  }
  gameLogic(description, gameData);
};
