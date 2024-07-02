// Теоретическая база JavaScript, часть 1


"use strict";


// Задание #1

// function isPrimeNumber(num) {
//         for (let index = 3; index <= Math.sqrt(num); index += 2) {
//             if (num % index === 0) {
//                 return false;

//             }
//         }
//         return true
// }


// console.log(isPrimeNumber(1));

// Задание #2


// function func(num, min, max) {
//     if(num < min) {
//         return min ** 2
//     }
//     if(num > max) {
//         return max ** 2
//     }
//     if(num < max - (max - min) / 2) {
//         return num ** 2
//     }else {
//         return Math.floor(num)
//     }
// }

// console.log(func(3, 1, 10)); // 9
// console.log(func(15, 1, 10)); // 100
// console.log(func(5, 1, 10)); // 25
// console.log(func(8.5, 1, 10)); // 8


// Задание #3

// function isPerfectNumber(number) {
//   if(number <= 1) {
//     return false
//   }

//   let num = 0
//   for (let index = 1; index <= number / 2; index++) {
//     if(number % index === 0) {
//       num += index;
//     }
//   }
//   return num === number
// }
  
//   console.log(isPerfectNumber(6));   // true
//   console.log(isPerfectNumber(28));  // true
//   console.log(isPerfectNumber(12));  // false
//   console.log(isPerfectNumber(16));  // false


// Задание #4

// function getNumberDigit(number, digitPosition) {
//     let result = undefined
//     const arr = []
//     for (let index = 1; index < number; index++) {
//         arr.push(index)
//     }
//     arr.forEach((element, index) => {
//         if(index == digitPosition) {
//             result = element
//         }
//     });
//     return result
// }
  
//   console.log(getNumberDigit(123, 0)); //1
//   console.log(getNumberDigit(123, 1)); // 2
//   console.log(getNumberDigit(123, 2)); // 3
//   console.log(getNumberDigit(1, 2)); // undefined