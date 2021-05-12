function lastIndexOf(array, num) {
  var indexes = [-1];
  array.forEach(function(number, index){
    if (num === number) {
      return indexes.push(index);
    } else {
      return indexes;
    }
  });
  let reader = indexes.length - 1;
  return indexes[reader];
  }
  
/*
  let index = -1;
  for(let i = array.length-1; i >= 0; i--) {
    const number = array[i];
    if (num === number) {
      index = i;
      break;
    }
  }
  return index;
}*/

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);