var app = require('./app');


console.log(`
	operation list:
	+---+---+---+---+---+
	-   add             -
	-   substract       -
	+   divide          +
	-   multiply        -
	-   pow             -
	-   rad             -
	+   deg             +
	-   abs             -
	-   ceil            -
	-   floor           -
	+   round           +
	---+---+---+---+---+-
	`);

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question('What operation do you want to choose? ', (answer, callback) => {
	console.log(`you have choosen:: ${answer}`);

	if (answer in operations) {
		console.log( `Свойство ${answer} существует!` );

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
			});
		});
	}
	else if (answer in math) {

		rl.question('first number ', (a) => {
			console.log(a);

			if (answer == 'rad') {
				console.log('result is: ' + math.rad(a) + ' degrees');
				rl.close();
			}
			else if (answer == 'deg') {
				console.log('result is: ' + math.deg(a) + ' radians');
				rl.close();
			}
			else if (answer == 'abs') {
				console.log('result is: ' + math.abs(a));
				rl.close();
			}
			else if (answer == 'ceil') {
				console.log('result is: ' + math.ceil(a));
				rl.close();
			}
			else if (answer == 'floor') {
				console.log('result is: ' + math.floor(a));
				rl.close();
			}
			else if (answer == 'round') {
				console.log('result is: ' + math.round(a));
				rl.close();
			}
		});
	}
	else {
		console.log('Please, choose a correct operation');
		rl.close();
	}
});


rl.on('close', function() {
	console.log('Have a great day!');
	process.exit(0);
});