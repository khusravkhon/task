// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//   const arrayStr = s.split("");
//   const result = [];

//   arrayStr.forEach((elem) => {
//     console.log(elem.slice(""));

//     // if (result.includes(elem.slice("").reverse().join(""))) {
//     // } else {
//     //   result.push(elem);
//     // }
//   });
// };

// // console.log(isValid("()[]{}"));
// // console.log(isValid("(]"));
// console.log(isValid("()"));

// function binarySearch(arr) {
//   const pivotIndex = Math.floor(arr.length / 2);
//   const pivot = arr[pivotIndex];

//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i === pivotIndex) continue;
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return binarySearch(left).concat(pivot, binarySearch(right));
// }

// console.log(binarySearch([23, 43, 4, 5, 6, 7, 8, 9, 10]));
