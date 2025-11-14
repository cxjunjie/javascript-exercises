const convertToCelsius = function(val) {
  let result = (val - 32) * (5 / 9);
  
  return Math.round((val - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(val) {
  let result = ((val * 9 / 5) + 32);

  return Math.round((result * 10)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
