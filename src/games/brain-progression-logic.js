import gameLogic from '../index.js';

const fillsUpNumberProgression = () => {
  const arr = [];
  const rangeOfNumbers = 150;
  const stepRange = 9;
  const step = Math.round((Math.random() * stepRange) + 1);
  const start = Math.round(Math.random() * rangeOfNumbers);
  const end = start + step * 10;
  for (let i = start; i < end; i += step) {
    arr.push(i);
  }
  return arr;
};

export default () => {
  const description = 'What number is missing in the progression?';
  const gameData = [];
  for (let i = 0; i < 3; i += 1) {
    const question = fillsUpNumberProgression();
    const result = [];
    const spacedNumber = Math.round(Math.random() * 9);
    const answerGame = `${question[spacedNumber]}`;
    question[spacedNumber] = '..';

    result.push(question.join(' '));
    result.push(answerGame);
    gameData.push(result);
  }
  gameLogic(description, gameData);
};
