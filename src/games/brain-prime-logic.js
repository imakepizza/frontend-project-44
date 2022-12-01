import { gameLogic, ROUNDS_COUNT } from '../index.js';
import getRandomInteger from '../utils.js';

const isPrime = (num, arrOfPrimes) => {
  for (let i = 0; i < arrOfPrimes.length; i += 1) {
    if (num === arrOfPrimes[i]) {
      return true;
    }
  }
  return false;
};
const generateRound = () => {
  const arrOfPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
    103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
    179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251,
    257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337,
    347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421,
    431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499];
  let answer = 'no';
  const question = getRandomInteger(0, 500);
  answer = isPrime(question, arrOfPrimes) ? 'yes' : 'no';
  return [`${question}`, answer];
};
export default () => {
  const gameData = [];
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    gameData.push(generateRound());
  }
  gameLogic(description, gameData);
};
