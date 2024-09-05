const sumAll = function(begin, end) {
  if((!Number.isInteger(begin) || !Number.isInteger(end)) || ((begin < 0) || (end < 0))){
    return "ERROR";
  }
  if (begin > end){
    let aux = begin;
    begin = end;
    end = aux;
  }
  let sum = 0;
  while(end >= begin){
    sum = sum + end;
    end--;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
