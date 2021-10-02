import playGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (numberFirst, numberSecond, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = numberFirst + numberSecond;
      break;

    case '-':
      result = numberFirst - numberSecond;
      break;

    case '*':
      result = numberFirst * numberSecond;
      break;

    default:
      result = null;
  }
  return result;
};

const getQuestionAnswer = () => {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(calculate(firstNumber, secondNumber, operator));
  return [question, correctAnswer];
};

const playCalc = () => playGame(gameRule, getQuestionAnswer);
export default playCalc;
