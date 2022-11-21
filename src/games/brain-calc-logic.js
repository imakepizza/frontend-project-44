import gameLogic from '../index.js';

const calculate = (num1, num2, sign) => {
  if (sign === '+') {
    return (num1 + num2);
  }
  if (sign === '-') {
    return (num1 - num2);
  }
  return (num1 * num2);
};
const brainCalc = () => {
  const gameData = [];
  const signs = ['+', '-', '*'];
  const description = 'What is the result of the expression?';
  const rangeOfNumbers = 25;
  for (let i = 0; i < 3; i += 1) {
    const result = [];
    const firstNumber = Math.round(Math.random() * rangeOfNumbers);
    const secondNumber = Math.round(Math.random() * rangeOfNumbers);
    const randSign = Math.round(Math.random() * 2);
    const question = `${firstNumber} ${signs[randSign]} ${secondNumber}`;
    const answerGame = (calculate(firstNumber, secondNumber, signs[randSign])).toString();
    result.push(question);
    result.push(answerGame);
    gameData.push(result);
  }
  gameLogic(description, gameData);
};

export default brainCalc;
