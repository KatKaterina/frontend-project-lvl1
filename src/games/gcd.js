import playGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (numberFirst, numberSecond) => {
  if (numberSecond > numberFirst) return getGcd(numberSecond, numberFirst);
  if (!numberSecond) return numberFirst;
  return getGcd(numberSecond, numberFirst % numberSecond);
};

const getQuestionAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const playGcd = () => playGame(gameRule, getQuestionAnswer);
export default playGcd;
