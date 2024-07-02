// Объекты

"use strict";

// Задание #1

// class Circle {

//     constructor(radius) {
//         this.radius = radius
//     }

//     getArea() {
//         return (this.radius * this.radius * Math.PI).toFixed(Number(2))
//     }
// }


// const circle = new Circle(5);
// console.log(circle.getArea()); // "78.54"

// Задание #2


// class Product {

//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }

//     priceWithDiscount(price) {
//         // if(price == 10) {
//         //     return 900
//         // }else {
//         //     return 800
//         // }
// 		return  this.price - this.price * (price / 100)
//     }
// }



// const product = new Product("Phone", 1000);
// console.log(product.priceWithDiscount(10)); // 900
// console.log(product.priceWithDiscount(20)); // 800




// Задание #3


// class Person {

//     constructor() {
//         this.friends = []
//     }

//     addFriend(name) {
//         this.friends.push(name)
//     }

//     showFriends() {
//         // let result = ''
//         // this.friends.map((e) => {
//         //     result += e
//         //     result += ','
//         // }) 
//         // return result
// 		return this.friends.join(', ')
//     }
// }

// const person = new Person();
// person.addFriend("Иван");
// person.addFriend("Сергей");
// person.addFriend("Игорь");
// person.showFriends(); // Иван, Сергей, Игорь


// Задание #4


// class Animal {

//     constructor(name, product) {
//         this.name = name
//         this.product = product
//     }

// 	makeSound() {
// 		console.log("Animal sound");
// 	}
	

//     sayName() {
//         console.log(`My name is ${this.name}`);
//     }

//     sayInfo() {
//         console.log(`${this.name}'s favorite food is ${this.product}`);
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         console.log('Gav!');
//     }
// }
 
// class Cat extends Animal {
//     makeSound() {
//         console.log('Meow');
//     }
// }


// const dog = new Dog('Rex', 'Meat');
// const cat = new Cat('Barsik', 'Fish');

// cat.makeSound(); // Meow
// dog.makeSound(); // Gav!

// dog.sayName(); // My name is Rex
// cat.sayName(); // My name is Barsik

// dog.sayInfo(); // Rex's favorite food is Meat
// cat.sayInfo(); // Barsik's favorite food is Fish



// // Задание #5


// const foo = {
//     a: 5,
//     bar: function bar() {
//         console.log(this);
//     },
//     baz: () => {
//         console.log(this);
//     } 
// }


// foo.bar();
// foo.baz();

// Задание #6


// const boxFactory = {
// 	type: 'box',
// 	count: 0,
// 	produce() {
// 		this.count++;
// 		return 'Box №' + this.count;
// 	}
// }

// const produceBox = (produce) => {
// 	const boxName = produce();
// 	console.log(boxName);
// }

// for(let i = 0; i < 25; i++) {
//     produceBox(boxFactory.produce.bind(boxFactory))
// }