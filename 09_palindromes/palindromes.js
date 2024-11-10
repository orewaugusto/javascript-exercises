const palindromes = function (str) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let strContent = str
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');
  
  let reversedStr = str
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .reverse()
    .join('')

  return strContent === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
