

import {add} from './app/operations'; //Unexpected token import




console.log('operation list:');
console.log('add');
console.log('subtr');




const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.on('line', (line) => {
  console.log(`Received: ${line}`);
});


rl.question('What operation do you want to choose? ', (answer) => {
	if (answer == 'add') {

	}
	rl.close();
});


