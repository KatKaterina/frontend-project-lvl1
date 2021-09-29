import readlineSync from 'readline-sync';
export const toGreet = () => {
    /*console.log('Welcome to the Brain Games!');*/
    const name = readlineSync.question('Your answer: ');
    console.log(`Hello, ${name}!`);
};