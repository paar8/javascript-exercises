const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = arr.reduce((acc, next) => acc + next, 0);
  return sum;
};

const multiply = function (arr) {
  let prod = arr.reduce((acc, next) => acc * next, 1);
  return prod;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    let n = 1;
    for (let i = 1; i <= num; i++) {
      n *= i;
    }
    return n;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
