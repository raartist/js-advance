Array.prototype.myMap = function (callback) {
  if (!callback) {
    throw Error("Polyfill-map: callback required to run this code.");
  }
  const arr = this;
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    let ret = callback(arr[i], i, arr);
    temp.push(ret);
  }
  return temp;
};
