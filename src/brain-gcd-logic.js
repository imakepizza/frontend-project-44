import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
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
  let answerGame = '';
  let answerUser = '';
  const userName = askName();
  let roundCounter = 0;
  console.log('Find the greatest common divisor of given numbers.');
  while (roundCounter < 3) {
    const firstNumber = Math.round(Math.random() * 100);
    const secondNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    answerUser = readlineSync.question('Your answer: ');
    answerGame = gcd(firstNumber, secondNumber);
    if (Number(answerUser) === answerGame) {
      console.log('Correct!');
      roundCounter += 1;
    } else {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${answerGame}'
        ,\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export { brainGcd };
