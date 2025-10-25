/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n == 0) return arr;
  const result = [];
  let flat2 = function (arre, deplo) {
    for (const element of arre) {
      if (Array.isArray(element) && deplo !== n) {
        flat2(element, deplo + 1);
      } else {
        result.push(element);
      }
    }
  };
  flat2(arr, 0);
  return result;
};

flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1);
