const convertToCelsius = function(F) {
  temperature = (F - 32)*(5/9);
  return Number(temperature.toFixed(1));
};

const convertToFahrenheit = function(C) {
  temperature = C * 9/5 + 32;
  return Number(temperature.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
