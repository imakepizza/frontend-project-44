import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const calculate = (num1, num2, sign) => {
	let result = 0;
	if(sign === '+') {
		return result = num1 + num2;
	}
	if(sign === '-') {
		return result = num1 - num2;
	}
	return result = num1 * num2;
}
const brainCalc = () => {

  let expression = '';
  let answerGame = 0;
  let answerUser = 0;
  const signs = ['+', '-', '*'];
  
  let userName = askName();
  let roundCounter = 0;
  console.log('What is the result of the expression?');
  while(roundCounter < 3) {
  	let firstNumber= Math.round(Math.random() * 25);
  	let secondNumber= Math.round(Math.random() * 25);
  	let randSign = Math.round(Math.random() * 2);
  	expression = `${firstNumber} ${signs[randSign]} ${secondNumber}`
    answerGame = calculate(firstNumber, secondNumber, signs[randSign]);
    console.log(`Question: ${expression}`);
    answerUser = readlineSync.question('Your answer: ');
    if(answerGame === Number(answerUser)) {
    	console.log("Correct!")
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

export {brainCalc};