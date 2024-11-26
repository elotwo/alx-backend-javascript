function askname() {
	process.stdout.write('Welcome to Holberton School, what is your name?\n');

	process.stdin.on('data', (data) => {
		const name = data.toString().trim();
		process.stdout.write(`Your name is: ${name}\n`);
		process.stdin.end();
	});
	process.on('exit', (code) => {
		console.log('This important software is now closing');
	});
}
module.exports = askname;
if (require.main === module) {
	  askname();
}
