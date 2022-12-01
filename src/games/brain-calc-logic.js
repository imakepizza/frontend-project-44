import gameLogic from '../index.js';
import getRandomInteger from '../utils.js';

const calculatesWithChosenOperator = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: {
      throw new Error(`Operator ${operator} - is invalid`);
    }
  }
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
      calculatesWithChosenOperator(firstNumber, secondNumber, signs[randSign])
    ).toString();
    result.push(question);
    result.push(answerGame);
    gameData.push(result);
  }
  gameLogic(description, gameData);
};
