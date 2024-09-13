Array.prototype.myReduce = function (callback, initialVal) {
  if (typeof callback !== "function") {
    throw Error("callback not defined!");
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    let result = callback(initialVal, arr[i], i, arr);
    initialVal = result;
  }
  return initialVal;
};
