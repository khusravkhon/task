/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
// var chunk = function (arr, size) {
//   let result = [];
//   let count = 1;
//   let num = [];
//   arr.forEach((elem) => {
//     num.push(elem);
//     if (count == size) {
//       result.push(num);
//       num = [];
//       count = 0;
//     }
//     count++;
//   });
//   if (num.length > 0) {
//     result.push(num);
//   }
//   return result;
// };

var chunk = function (arr, size) {
  let result = [];
  let count = 0;
  let num = size;

  while (count < arr.length) {
    result.push(arr.slice(count, num));
    count += size;
    num += size;
  }

  return result;
};

console.log(chunk([1, 2, , 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
