const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to Holberton School, what is your name?\n', function(reponse) {
  console.log(`Your name is: ${reponse}`);
});
rl.on('close', function() {
  console.log('This important software is now closing');
});
