// Теоретическая база JavaScript, часть 2


"use strict";

// Задание #1

// const car = [
//     {
//         name: 'Hyundai Solaris',
//         type: 'sedan',
//         maxSpeed: '320',
//         color: 'red',
//     },
//     {
//         name: 'Hyundai Solaris',
//         type: 'sedan',
//         maxSpeed: '320',
//         color: 'red',
//     },
//     {
//         name: 'Hyundai Solaris',
//         type: 'sedan',
//         maxSpeed: '320',
//         color: 'red',
//     },
// ]

// function htmlObject(car) {
//     let htmlString = '<article>';
//     car.forEach(element => {
//         htmlString += `
//     <div>
//         <h2>${element.name}</h2>
//         <span>${element.type}</span>
//     </div>`
//     });
//     htmlString += '<article>'
//     return htmlString
// }

// console.log(htmlObject(car));


// Задание #2


// function countWords(str) {
//     return str.trim().split(' ').filter(Boolean).length
// }

// const sentence = "Hello, how are you?";
// console.log(countWords(sentence)); // 4


// Задание #3

// function getInitials(str) {
//     let result = '';
//     str.trim().split(' ').filter((e) => {
//         result += e.substring(0,1)
//         result += '. '
//     })
//     return result
// }


// const fullName = "John Doe";
// const initials = getInitials(fullName);
// console.log(initials); // "J. D."


// Задание #4


// function generateGoogleString(num) {
//     let result = 'G'
//     let o = 'o'
//     let numbers = 2
//     if(num > 0) {
//         numbers = num
//     }
//     for (let index = 0; index < numbers; index++) {
//         result += o
//     }
//     return result += 'gle'
// }


// console.log(generateGoogleString(4));
// // Goooogle

// console.log(generateGoogleString(0));
// // Google

// console.log(generateGoogleString(-2));
// // Google



// Задание #5


// function countVowels(str) {
//     const vowels = 'aeiouаеёиоуыэюя'; 
//     return Array.from(str.toLowerCase()).filter(letter => vowels.includes(letter)).length;
// }

// const str = "Hello, Привет!";
// console.log(countVowels(str)); // 4
