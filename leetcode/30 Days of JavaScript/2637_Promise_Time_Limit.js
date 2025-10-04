/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(reject, t, "Time Limit Exceeded");
    });

    const promise2 = new Promise((resolve, reject) => {
      const result = fn(...args);
      resolve(result);
    });

    return Promise.race([promise1, promise2]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);

console.log(limited(150).catch(console.log));
// "Time Limit Exceeded" at t=100ms
