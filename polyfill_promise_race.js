Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    //if there's no array passed
    if (!Array.isArray(promises)) {
      return reject(new Error("undefined is not iterable."));
    }
    const len = promises.length;
    if (len === 0) {
      return resolve();
    }

    promises.forEach((promise, index) => {
      return Promise.resolve(promise).then(resolve).catch(reject)
    });
  });
};
