import playGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const gameRule = 'What number is missing in the progression?';

const getProgression = () => {
  const result = [];
  let value = getRandomNumber();
  const length = 10;
  const increment = getRandomNumber();
  for (let i = 1; i <= length; i += 1) {
    result.push(value);
    value += increment;
  }
  return result;
};

const getQuestionAnswer = () => {
  const progression = getProgression();
  const correctAnswer = String(progression[Math.floor(Math.random() * progression.length)]);
  const stringProgression = progression.join(' ');
  const question = stringProgression.replace(correctAnswer, '..');
  return [question, correctAnswer];
};

const playProgression = () => playGame(gameRule, getQuestionAnswer);
export default playProgression;
