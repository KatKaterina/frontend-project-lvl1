import playGame from '../index.js';
import getRandomNumber from '../common.js';

const isEven = (number) => number % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEven = () => playGame(gameRule, getQuestionAnswer);
export default playEven;
