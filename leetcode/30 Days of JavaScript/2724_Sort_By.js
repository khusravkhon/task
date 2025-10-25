/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  let result = arr.sort((a, b) => a - b);
};

sortBy([5, 4, 1, 2, 3], (fn = (x) => x));
