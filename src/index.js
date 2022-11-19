import readlineSync from 'readline-sync';

const gameLogic = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  let roundCounter = 0;
  let answerUser = '';
while (roundCounter < 3) {

   const [question, answerGame] = gameData[roundCounter];
    console.log(`Question: ${question}`);
    answerUser = readlineSync.question('Your answer: ');
    if (answerGame === answerUser) {
      console.log('Correct!');
      roundCounter += 1;
    } else {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${answerGame}'
        ,\nLet's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
}
export {gameLogic};