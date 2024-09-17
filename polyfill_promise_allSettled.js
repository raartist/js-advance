Promise.myAllSettled = function (promises) {
  //this method always return a promise
  return new Promise((resolve, reject) => {
    //if there is no array passed reject with error
    if (!Array.isArray(promises)) {
      return reject(Error("undefined is not iterable."));
    }
    const len = promises.length;
    const result = [];
    //if empty array is passed return empty respnse
    if (len === 0) {
      return resolve({ status: "fulfilled", value: "" });
    }

    const status = { resolve: "fulfilled", reject: "rejected" };
    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        let obj = { status: status.resolve, value: res };
        result[index] = obj;
        if (index === len - 1) {
          return resolve(result);
        }
      } catch (err) {
        let obj = { status: status.reject, reason: err };
        result[index] = obj;
        if (index === len - 1) {
          return resolve(result);
        }
      }
    });
  });
};
