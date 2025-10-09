/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(functions)) {
      return reject("No Array");
    }

    const result = [];
    let count = 0;
    let totalLen = functions.length;

    functions.forEach((promises, index) => {
      Promise.resolve(promises())
        .then((value) => {
          result[index] = value;
          count++;

          if (totalLen == count) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]
