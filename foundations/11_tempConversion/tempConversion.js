const convertToCelsius = function(far) {
  cel = ((far-32) * 5/9);
  return parseFloat(cel.toFixed(1));
};

console.log(convertToCelsius(150.8));

const convertToFahrenheit = function(cel) {
  far = ((cel * 9/5) + 32);
  return parseFloat(far.toFixed(1));
};

console.log(convertToFahrenheit(66));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
