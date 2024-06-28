// Теоретическая база JavaScript, часть 4

"use strict";

// Задание #1

// function calculateAge(data) {
//     return new Date().getFullYear() - new Date(data).getFullYear()
// }

// const birthDate = new Date('1990-05-20');
// const age = calculateAge(birthDate);

// console.log(age);


// Задание #2

// function getDateDifference(date1, date2) {
//     return new Date(date2).getDate() - new Date(date1).getDate()
// }

// const date1 = new Date('2027-06-01');
// const date2 = new Date('2027-06-10');
// const difference = getDateDifference(date1, date2);
// console.log(difference); // 9


// Задание #3

// function getTimeUntilDate(date) {
//     let evev = new Date(date)
//     let evev1 = new Date()
//     return {
//         days: evev1.getDate() * evev.getDate(),
//         hours: evev1.getHours() * evev.getHours(),
//         minutes: evev1.getMinutes() * evev.getMinutes(),
//         seconds: evev1.getSeconds() * evev.getSeconds()
//     }
// }

// const targetDate = new Date('2027-12-31T23:59:59');
// const timeUntilTargetDate = getTimeUntilDate(targetDate);
// console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }


// Задание #4


// function isWeekend(date) {
//     return new Date(date).getDay() % 6 === 0
// }

// const date1 = new Date('2027-07-10');  // Суббота
// const date2 = new Date('2027-07-11');  // Воскресения
// const date3 = new Date('2027-07-12');  // Понедельник

// console.log(isWeekend(date1));  // true
// console.log(isWeekend(date2));  // true
// console.log(isWeekend(date3));  // false


// Задание #5


function isLeapYear(date) {
    return Math.floor(date/4);
}


console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true