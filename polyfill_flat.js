Array.prototype.myFlat = function () {
  const arr = this;
  const finalArr = [];
  function flat(arr) {
    for (let index = 0; index < arr.length; index++) {
      if (Array.isArray(arr[index])) {
        flat(arr[index]);
      } else {
        finalArr.push(arr[index]);
      }
    }
  }
  flat(arr);
  return finalArr;
};

//iterative way

// Array.prototype.myFlat = function () {
//   const stack = [...this];
//   const result = [];

//   while (stack.length) {
//     let ele = stack.pop();
//     if (Array.isArray(ele)) {
//       stack.push(...ele);
//     } else {
//       result.push(ele);
//     }
//   }
//   return result.reverse();
// };
