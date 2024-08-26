const sumAll = function(a,b) {
  if (Number.isInteger(a) && Number.isInteger(b) && a >=0 && b >= 0){
    let res = 0;
    let lower = Math.min(a,b);
    let upper = Math.max(a,b);
    for(let i=lower ; i <= upper ; i++){
      res += i;
    }
    return res;
  } 
  return 'ERROR';
}

// Do not edit below this line
module.exports = sumAll;
