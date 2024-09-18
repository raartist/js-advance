Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(Error("undefined is not iterable."));
    }
    const len = promises.length;
    const errors = [];
    if (len === 0) {
      return reject({ message: "Empty array passed!", errors });
    }

    promises.forEach(async (promise, index) => {
      try {
        const result = await promise;
        return resolve(result);
      } catch (err) {
        errors[index] = err;
        if (index === len - 1) {
          return resolve({ message: new Error("All promises were rejected."), errors });
        }
      }
    });
  });
};
