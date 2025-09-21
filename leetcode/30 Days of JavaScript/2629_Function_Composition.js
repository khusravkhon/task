/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    var num = x;
    let leng = functions.length;
    functions.forEach((elem, i) => {
      num = functions[--leng](num);
    });
    return num;
  };
};

// метод reduceRight

var compose2 = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, fun) => fun(acc), x);
  };
};

const fn = compose2([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn(4));
// 9
