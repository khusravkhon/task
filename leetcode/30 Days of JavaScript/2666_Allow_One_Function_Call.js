/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let calls = false;
  return function (...args) {
    if (!calls) {
      calls = true;
      return fn(...args);
    } else return undefined;
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
let fn = (a, b, c) => a + b + c;

let onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
