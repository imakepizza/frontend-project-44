import readlineSync from 'readline-sync';
import welcomeUser from './cli.js';

const ROUNDS_COUNT = 3;

const runEngine = (gameRules, gameData) => {
  const name = welcomeUser();
  console.log(`${gameRules}`);
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = gameData[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { runEngine, ROUNDS_COUNT };
