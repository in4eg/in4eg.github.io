var app = require('./app');


console.log(`
	operation list:
	+---+---+---+---+---+
	-   add             -
	-   substract       -
	+   divide          +
	-   multiply        -
	-   pow             -
	-   rad to deg      -
	+   deg to rad      +
	---+---+---+---+---+-
	`);



const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question('What operation do you want to choose? ', (answer, callback) => {
	console.log(`you have choosen:: ${answer}`);

	rl.question('first number ', (a) => {
		console.log(a);

		rl.question('secound number ', (b) => {
			console.log(b);

			if (answer == 'add') {
				console.log('result is: ' + operations.add(a,b));
				rl.close();
			}
			else if (answer == 'substract') {
				console.log('result is: ' + operations.substract(a,b));
				rl.close();
			}
			else if (answer == 'divide') {
				console.log('result is: ' + operations.divide(a,b));
				rl.close();
			}
			else if (answer == 'pow') {
				console.log('result is: ' + operations.pow(a,b));
				rl.close();
			}
			else if (answer == 'rad') {
				console.log('result is: ' + operations.rad(a,b));
				rl.close();
			}
			else if (answer == 'deg') {
				console.log('result is: ' + operations.deg(a,b));
				rl.close();
			}
		});
	});
});


rl.on('close', function() {
	console.log('Have a great day!');
	process.exit(0);
});