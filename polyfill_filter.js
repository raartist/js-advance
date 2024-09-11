Array.prototype.myFilter = function (callback) {
  if (!callback) {
    throw new Error("prototype: filter -> can't run without callback method passed.");
  }
  const arr = this;
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i], i, arr);
    if (result) temp.push(result);
  }
  return temp;
};
