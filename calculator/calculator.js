function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (arr) {
	return arr.reduce((sum, currentValue) => sum + currentValue, 0);
}

function multiply (arr) {
	return arr.reduce((product, currentValue) => product * currentValue, 1);
}

function power(x, y) {
	return Math.pow(x, y);
}

function factorial(x) {
	if (x === 0) { 
		return 1;
	}	else {
		return x *= factorial(x - 1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}