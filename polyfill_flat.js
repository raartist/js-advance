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
