// Массивы и объекты


"use strict";

// Задание #1

// let john = {
//     name: 'Khusrav',
//     age: 12,
//     pet: 'efwef'
// }

// let ann = {
//     name: 'fwef',
//     age: 122,
//     pet: 'effwefwef'
// }

// function SettingPeople(object) {
//     incrementAge(object)
//     return `Меня зовут ${object.name}, мне ${object.age}, у меня есть питомец ${object.pet}.`
// }
// function incrementAge(object) {
//     return object.age++
// }

// for (var key in john) {
//     console.log(john[key]);
// }

// console.log(john);

// console.log(SettingPeople(john));

// console.log(john);


// Задание #2

// function sum(array) {
//     let result = null;
//     array.forEach(element => {
//         result += element
//     });
//     return result
//   }
  
//   const arr = [1, 50, 20, 75, 90];
  
// console.log(  sum(arr));


// Задание #3

// let names = []

// names.push('Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya')

// console.log(names);

// let ewf = names.slice(1, -1)

// console.log(ewf);

// Задание #4


// const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];


// function wefwe(name) {
//     let htmlString = '<ul>';
//     name.forEach((element) => {
//         htmlString += `<li>${element}</li>`
//     });
//     htmlString += '</ul>'
//     return htmlString;
// }


// console.log(wefwe(names));


// Задание #5

// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };


// let [age, favColor, height, pet, money] = [obj.age, obj.favColor, obj.height, obj.pet, obj.money]


// console.log(age);
// console.log(favColor);
// console.log(height);
// console.log(pet);
// console.log(money);


// Задание #6

// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };

// const updateObj = {
// 	age: 23,
// 	favColor: 'blue',
// 	money: 11450
// };

// const obj2 = {
//     age: updateObj.age,
//     favColor: updateObj.favColor,
//     height: obj.height,
//     pet: obj.pet,
//     money: updateObj.money
// };
// console.log(obj2);