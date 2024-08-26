const removeFromArray = function(array, ...toRemove) {
  let res = [];
  for (const element of array){
    if (!toRemove.includes(element)) {
      res.push(element);
    }
  }
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
