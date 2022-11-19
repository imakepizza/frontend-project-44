import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const fillsUp = () => {
  const arr = [];
  const step = Math.round(Math.random() * 9 + 1);
  const start = Math.round(Math.random() * 150);
  const end = start + step * 10;
  for(let i = start; i < end; i += step) {
    arr.push(i);
  }
  return arr;
}

const brainProgression = () => {
  
  let answerUser = '';
  const userName = askName();
  let roundCounter = 0;
  console.log('What number is missing in the progression?');
  while(roundCounter < 3) {
  const progression = fillsUp();
  let spacedNumber = Math.round(Math.random()*10);
  let answerGame = progression[spacedNumber];
  progression[spacedNumber] = ' .. ';
  console.log(`Question: ${progression}`);
  answerUser = readlineSync.question('Your answer: ');
  if(Number(answerUser) === answerGame) {
    console.log('Correct');
    roundCounter +=1;
  }
  else {
    console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${answerGame}'
        ,\nLet's try again, ${userName}!`,
      );
      return;
  }
}
  console.log(`Congratulations, ${userName}`);
};
export { brainProgression };
