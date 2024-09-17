Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    //base case - not having promises array
    if (!Array.isArray(promises)) {
      reject(Error("myAll: undefined is not an iterable."));
    }
    const len = promises.length;
    //initialize empty array to store responses
    const result = [];

    //base case - promises having zero items
    if (promises.length === 0) {
      return resolve(result);
    }

    //loop through promises and store the response in initialized array
    promises.forEach(async (promise, index) => {
      try {
        let res = await promise;
        result[index] = res;

        //return array of responses when it is last index
        if (index === len - 1) resolve(result);
      } catch (err) {
        //check if any promise fails - reject completely
        return reject(err);
      }
    });
  });
};
