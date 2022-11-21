import readlineSync from 'readline-sync';
import {gameLogic} from './index.js'

const gcd = (num1, num2) => {
  let temp = 0;
  while (num2) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp
  }
  return num1;
}
const brainGcd = () => {
  const gameData = [];
  const description = 'Find the greatest common divisor of given numbers.';
  for(let i = 0; i < 3; i += 1) {
    const result = [];
    let answerGame = '';
    let question = '';
    const rangeOfNumbers = 100;
    const firstNumber = Math.round(Math.random() * rangeOfNumbers);
    const secondNumber = Math.round(Math.random() * rangeOfNumbers);
    question = `${firstNumber} ${secondNumber}`;
    answerGame = (gcd(firstNumber, secondNumber)).toString();
    result.push(question);
    result.push(answerGame)
    gameData.push(result);
    }
  gameLogic(description, gameData);

};
export { brainGcd };
