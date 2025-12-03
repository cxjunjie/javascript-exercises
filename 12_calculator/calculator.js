const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((total, num) => {
  return total + num;
}, 0);

const multiply = (arr) => arr.reduce((total, num) => {
  return total * num;
});

const power = (a, b) => a ** b;

const factorial = (num) => {
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
