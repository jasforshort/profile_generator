const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  `What's your name? Nicknames are also acceptable :) `,
  `What's an activity you like doing? `,
  `What do you listen to while doing that? `,
  `Which meal is your favourite (eg: dinner, brunch, etc.) `,
  `What's your favourite thing to eat for that meal? `,
  `Which sport is your absolute favourite? `,
  `What is your superpower? In a few words, tell us what you are amazing at! `
];

let answers = [];

const nextQuestion = () => {
  rl.question(questions.shift(), answer => {
    answers.push(answer);
    if (0 === questions.length) {
      rl.close();
    } else {
      nextQuestion();
    }
  });
};

nextQuestion();

rl.on('close', () => {
  answers = {
    name : answers[0],
    activity : answers[1],
    music : answers[2],
    meal : answers[3],
    food : answers[4],
    sport : answers[5],
    superpower : answers[6]
  };

  let paragraph = `${answers.name} likes to do ${answers.activity} and listens to ${answers.music} while doing that. ${answers.name}'s favourite meal is ${answers.meal}.\nThey like to eat ${answers.food}. Their favourite sport is ${answers.sport} and their superpower is ${answers.superpower}.`;

  console.log(paragraph);
});