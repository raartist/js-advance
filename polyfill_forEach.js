Array.prototype.myForEach = function (callback) {
  if (!callback) {
    throw Error("Polyfill-forEach: callback required to run this code.");
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};
