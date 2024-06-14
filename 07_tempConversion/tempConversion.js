const convertToCelsius = function (temp) {
  temp = ((temp - 32) * 5) / 9;
  let finalTemp = Math.round(temp * 10) / 10;
  return finalTemp;
};

const convertToFahrenheit = function (temp) {
  temp = (temp * 9) / 5 + 32;
  let finalTemp = Math.round(temp * 10) / 10;
  return finalTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
