import playGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1 || number <= 0) {
    return false;
  }
  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0 && number !== i) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playPrime = () => playGame(gameRule, getQuestionAnswer);
export default playPrime;
