'use strict';

//Основы ООПб прототипн-ориентированное наследование 

let str = 'some';
let strObj = new String(str);//не корректно

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello');
    }
};

// const john = {
//     health:100
// };

// устаревший формат
// john.__proto__ = soldier;
// console.log(john.armor);
// console.log(john.sayHello);

// Object.setPrototypeOf(john, soldier);
// john.sayHello();

const john = Object.create(soldier);
john.sayHello();