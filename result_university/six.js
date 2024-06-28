// Теоретическая база JavaScript, часть 3


"use strict";



// Задание #1


// function sumNumbers(...params) {
//     let result = null
//     params.forEach(element => {
//         result += element
//     });
//     return result
// }


// const result1 = sumNumbers(1, 2, 3, 4, 5);
// console.log(result1); // 15

// const result2 = sumNumbers(10, 20, 30);
// console.log(result2); // 60


// Задание #2

// function findMaxValue(arr) {
//    return arr.length ? Math.max(...arr) : undefined
// }


// const numbers1 = [1, 2, 3, 4, 5];
// const max1 = findMaxValue(numbers1);
// console.log(max1); // 5

// const numbers2 = [10, 20, 5, 30, 15];
// const max2 = findMaxValue(numbers2);
// console.log(max2); // 30

// const emptyArray = [];
// const maxEmpty = findMaxValue(emptyArray);
// console.log(maxEmpty); // undefined


// Задание #3

// function calculateAverage(arr) {
//     let result = 0
//     if(arr.length) {
//         arr.forEach((e) => {
//             result += e
//         })
//     }
//     return arr.length ? result / arr.length : result
// }



// const numbers1 = [1, 2, 3, 4, 5];
// console.log(calculateAverage(numbers1)); // 3

// const numbers2 = [10, 20, 30, 40, 50];
// console.log(calculateAverage(numbers2)); // 30

// const emptyArray = [];
// console.log(calculateAverage(emptyArray)); // 0


// Задание #4


// function isPalindrome(str) {
//     return str.split('').reverse().join('') == str ? true : false
// }

// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('radar')); // true
// console.log(isPalindrome('hello')); // false

// Задание #5


// function removeDuplicates(arr) {
//    return Array.from(new Set(arr))
// }


// const numbers1 = [1, 2, 3, 3, 4, 5, 5];
// console.log(removeDuplicates(numbers1));  // [1, 2, 3, 4, 5]

// const numbers2 = [10, 20, 30, 30, 40, 40, 50];
// console.log(removeDuplicates(numbers2));  // [10, 20, 30, 40, 50]

// const emptyArray = [];
// console.log(removeDuplicates(emptyArray));  // []


// Задание #6


// function createCounter(value) {
//     let result = value
// 	function inc() {
//         result++;
//         return result
//     }
//     function dec() {
//         result--
//         return result
//     }
//     function get() {
//         return result
//     }
//     return { inc, dec, get };


// const inc = () => value++;
// const dec = () => value--;
// const get = () => value;

// return { inc, dec, get };

// }

// const { inc, dec, get } = createCounter(5);
// console.log(get()); // 5
// inc();
// inc();
// inc();
// dec();
// console.log(get()); // 7