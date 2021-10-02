import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const playGame = (gameRule, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('You answer: ').toLowerCase();
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
