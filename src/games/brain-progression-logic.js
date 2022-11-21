import gameLogic from '../index.js'


const fillsUp = () => {
  const arr = [];
  const step = Math.round((Math.random() * 9) + 1);
  const start = Math.round(Math.random() * 150);
  const end = start + step * 10;
  for(let i = start; i < end; i += step) {
    arr.push(i);
  }
  return arr;
}

const brainProgression = () => {
  const description = 'What number is missing in the progression?';
  const gameData = [];
  for(let i = 0; i < 3; i += 1) {
  const question= fillsUp();
  const result = [];
  let spacedNumber = Math.round(Math.random()* 10);
  let answerGame = question[spacedNumber].toString();
  question[spacedNumber] = ' .. ';
  result.push(question);
  result.push(answerGame);
  gameData.push(result);
  }
  gameLogic(description, gameData);
 
};
export { brainProgression };
