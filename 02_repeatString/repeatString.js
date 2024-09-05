const repeatString = function(string, num) {
  if (num < 0) return "ERROR";
  let echoedString = "";
  while (num > 0){
    echoedString = echoedString + string;
    num--;
  }
  return echoedString;
};

// Do not edit below this line
module.exports = repeatString;
