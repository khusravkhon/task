/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  let result = false;
  if (Array.isArray(obj)) {
    obj.length > 0 ? (result = false) : (result = true);
  } else {
    JSON.stringify(obj) == "{}" ? (result = true) : (result = false);
  }
  return result;
};

console.log(isEmpty({ x: 5, y: 42 }));
console.log(isEmpty({}));
console.log(isEmpty([]));
console.log(isEmpty([null, false, 0]));
