'use strict';
//передача по ссылке или по значению, оператор spread

// let a = 5,
//     b = a;

//     b = b +5;
    
//     console.log(b);
//     console.log(a);

    //const obj = { 
       // a: 5,
       // b: 1
    //};
    
    //const copy = obj;//передаёт ссылку, мы не скопировали новый объект
    //а передает именно ссылку на существующий объект

//copy.a = 10;
//console.log(copy);
//console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key]=mainObj[key];
    }
    return objCopy;
}

const numbers = {
a: 2,
b: 5,
c: {
    x: 7,
    y: 4
 }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;//измениться везде
console.log(newNumbers);
console.log(numbers);
/*{ a: 10, b: 5, c: { x: 10, y: 4 } }
{ a: 2, b: 5, c: { x: 10, y: 4 } }
потому что создана поверхностная копия 
*/

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign(numbers, add);

clone.d = 225;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();//метод позволяющий скопировать старый массив

newArray[1] = 'asdfsdfsdfdfs';
console.log(newArray);
console.log(oldArray);

//четвертый способ создания поверхностной копии
// spread оператор разворота, разворачивает структуру и превращает ее
// в набор данных

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpess', 'livejounal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
    console.log(internet);

    function log(a , b , c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }

    const num = [2, 5, 7];//информация пришелшая с сервера
    //нам нужно ередать ее в функцию

    log(... num);

//еще один способ

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};


