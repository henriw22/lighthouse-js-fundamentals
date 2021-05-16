
function merge(tom,jerry) {
  let arr = [];
  let result = [];
  for (let i = 0; i < tom.length; i++) {
    arr.push(tom[i]);
  }
  for (let i = 0; i < jerry.length; i++) {
    arr.push(jerry[i]);
  }
  
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
         var x = arr[i];
         arr[i] = arr[j];
         arr[j] = x;
      }
    }
  }
return arr;


  // a different way to solve the problem with a single loop
  // let result = [];
  // let totalLength = tom.length + jerry.length;
  // let tomIndex = 0;
  // let jerryIndex = 0;

  // while ((tomIndex + jerryIndex) < totalLength) {
  //   if (tomIndex === tom.length || jerry[jerryIndex] < tom[tomIndex]) {
  //     result.push(jerry[jerryIndex++]);
  //   } else if (jerryIndex === jerry.length || tom[tomIndex] <= jerry[jerryIndex]) {
  //     result.push(tom[tomIndex++]);
  //   }
  // }
  // return result;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);