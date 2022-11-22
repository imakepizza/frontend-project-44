import gameLogic from '../index.js';

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
  const rangeOfNumbers = 25;
  const rangeOfSigns = 2;
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const result = [];
    const firstNumber = Math.round(Math.random() * rangeOfNumbers);
    const secondNumber = Math.round(Math.random() * rangeOfNumbers);
    const randSign = Math.round(Math.random() * rangeOfSigns);
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
