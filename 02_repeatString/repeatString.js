const repeatString = function(inputToRepeat, nbOfTimes) {
  if(nbOfTimes< 0) return 'ERROR';
  let res= '';
  for(nbOfTimes; nbOfTimes > 0 ; nbOfTimes--){
    res += inputToRepeat;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
