// Асинхронность

"use strict";


// Задание #1


// console.log('a');
// new Promise((resolve, reject) => {
// 	console.log('b');
// 	setTimeout(() => {
// 		console.log('c');
// 		resolve();
// 	}, 0);
// })
//   .then(() => console.log('d'));

// console.log('e');
// setTimeout(() => console.log('f'), 0);
// console.log('g');


// console.log('a,b,e,g,c,d,f'); // result 


// Задание #2

// https://jsonplaceholder.typicode.com/todos


// const dateList = new Promise((res, rej) => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => {
//         res(response)
//     })
//     .catch(() => {
//         rej(error);
//     })
// })


// function handleResolve(response) {
//     response.json().then((data) => {
//         listdata(data)
//     })
//     .catch(() => {
//         console.error('Error parsing JSON:', error);
//     })
// }


// function handleReject(response) {
//     console.error(response)
// }

// dateList.then(handleResolve,handleReject)


// function listdata(data) {
//     const el = document.createElement('ul')
//     data.forEach((element) => {
//         const newLi = document.createElement('li')
//         newLi.textContent = element.title
//         el.appendChild(newLi)
//     });
//     document.body.appendChild(el)
// }


// Задание #3

// function sumWithDelay(delay, a, b) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(a + b)
//     }, delay)
//   })
// }

// async function start() {
//   const result = await sumWithDelay(1000, 5, 5);
//   console.log(result);
// }

// start();


// Задание #4

// const USERS = [
//     { id: '001', name: "Алексей", age: 25 },
//     { id: '002', name: "Иван", age: 28 },
//     { id: '003', name: "Егор", age: 30 },
//   ];
  
//   function fetchUser(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let user = USERS.filter((e) => e.id == id)
//             user ? resolve(user) : reject(new Error('Пользователь не найден'))
//         }, 2500)
//     })
//   }
  
//   async function start() {
//     // ...
//     const result = await fetchUser('001');
//     console.log(result); // { id: '001', name: "Алексей", age: 25 }
//     // ...
//   }
  
//   start();


