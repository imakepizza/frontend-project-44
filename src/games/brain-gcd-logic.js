import gameLogic from '../index.js';

const gcd = (num1, num2) => {
  let temp = 0;
  let n1 = num1;
  let n2 = num2;
  while (num2) {
    temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }
  return n1;
};
const brainGcd = () => {
  const gameData = [];
  const description = 'Find the greatest common divisor of given numbers.';
  for (let i = 0; i < 3; i += 1) {
    const result = [];
    const rangeOfNumbers = 100;
    const firstNumber = Math.round(Math.random() * rangeOfNumbers);
    const secondNumber = Math.round(Math.random() * rangeOfNumbers);
    const question = `${firstNumber} ${secondNumber}`;
    const answerGame = (gcd(firstNumber, secondNumber)).toString();
    result.push(question.toString());
    result.push(answerGame);
    gameData.push(result);
  }
  gameLogic(description, gameData);
};
export default brainGcd;
