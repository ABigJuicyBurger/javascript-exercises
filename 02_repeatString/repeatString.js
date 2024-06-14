const repeatString = function (string, number) {
  //- Create a variable to hold the string you're going to return, create a loop that repeats the given number of times and add the given string to the result on each loop.
  if (number < 0) {
    return "ERROR";
  }
  let sentence = "";
  for (let i = 0; i < number; i++) {
    // for example if i need to show function (hey, 3) it should print heyheyhey
    sentence += string;
    //- Return the result of the loop.
  }
  return sentence;
};

// Do not edit below this line
module.exports = repeatString;
