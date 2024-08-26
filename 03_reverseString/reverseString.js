const reverseString = function(toReverse) {
  let res = "";
  for(let i = toReverse.length - 1; i >= 0 ; i--){
    res += toReverse.charAt(i);
  }
  return res;
};

// Do not edit below this line
module.exports = reverseString;
