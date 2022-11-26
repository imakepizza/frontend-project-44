import gameLogic from '../index.js';
import getRandomInteger from '../utils.js';

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameData = [];
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const result = [];
    const numberToGuess = getRandomInteger(0, 100);
    const question = `${numberToGuess}`;
    const answerGame = numberToGuess % 2 === 0 ? 'yes' : 'no';
    result.push(question);
    result.push(answerGame);
    gameData.push(result);
  }
  gameLogic(description, gameData);
};
