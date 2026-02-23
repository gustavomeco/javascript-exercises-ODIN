const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  return numbers.reduce((initial,num) => initial + num,0);
};

const multiply = function(numbers) {
  return numbers.reduce((initial,num) => initial * num,1);
};

const power = function(n1,n2) {
	return n1 ** n2;
};

const factorial = function(num) {
  let numF = 1;
	for (let i = num; i > 0 ; --i) {
    numF *= i;
  };
  return numF;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
