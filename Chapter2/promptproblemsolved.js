// prompt related problem solved

// step 1 : write npm init-y in terminal and press enter
// step 2 : then write clear and press enter
// step 3 : Again write npm install prompt-sync and press enter
// step 4 : then write const prompt = require('prompt-sync')(); in code editor then run the code and it will work.

const prompt = require('prompt-sync')();

let a = prompt("Hey whats your age?")