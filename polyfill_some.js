Array.prototype.mySome = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("prototype: some -> can't run without callback method passed.");
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i], i, arr);
    if (result) return true;
  }
  return false;
};
