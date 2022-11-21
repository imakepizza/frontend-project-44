import gameLogic from '../index';

const brainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameData = [];
  const rangeOfNumbers = 100;
  for (let i = 0; i < 3; i += 1) {
    const result = [];
    const numberToGuess = Math.round(Math.random() * rangeOfNumbers);
    const question = `${numberToGuess}`;
    const answerGame = numberToGuess % 2 === 0 ? 'yes' : 'no';
    result.push(question);
    result.push(answerGame);
    gameData.push(result);
  }
  gameLogic(description, gameData);
};
export default brainEven;
