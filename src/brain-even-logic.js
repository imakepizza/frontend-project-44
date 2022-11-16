import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const brainEven = () => {
  let numberToGuess = 0;
  let answerGame = '';
  let answerUser = '';
  let userName = askName();
  let roundCounter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while(roundCounter < 3) {
  	numberToGuess = Math.round(Math.random() * 100);
    console.log(`Question: ${numberToGuess}`);
    answerGame = numberToGuess % 2 === 0 ? 'yes' : 'no';
    answerUser = readlineSync.question('Your answer: ');
    if (answerUser.toLowerCase() === answerGame) {
      console.log('Correct');
      roundCounter += 1;
    } else {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${answerGame}'.`,
        `\nLet's try again, ${userName}!`,
    );
    return
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export { brainEven };
