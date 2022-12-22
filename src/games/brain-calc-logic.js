import { runEngine, ROUNDS_COUNT } from '../index.js';
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

const generateRound = () => {
  const signs = ['+', '-', '*'];
  const firstNumber = getRandomInteger(0, 25);
  const secondNumber = getRandomInteger(0, 25);
  const randomSign = signs[getRandomInteger(0, 2)];
  const question = `${firstNumber} ${randomSign} ${secondNumber}`;
  const answer = (
    calculatesWithChosenOperator(firstNumber, secondNumber, randomSign)
  ).toString();
  return [question, answer];
};

export default () => {
  const gameData = [];
  const gameRules = 'What is the result of the expression?';
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    gameData.push(generateRound());
  }
  runEngine(gameRules, gameData);
};
