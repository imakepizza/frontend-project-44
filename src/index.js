import readlineSync from 'readline-sync';

const gameLogic = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  const roundsCount = 3;
  let answerUser = '';
  for (let gamesRound = 0; gamesRound < roundsCount; gamesRound += 1) {
    const [question, correctAnswer] = gameData[gamesRound];
    console.log(`Question: ${question}`);
    answerUser = readlineSync.question('Your answer: ');
    if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameLogic;
