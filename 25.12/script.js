"use strict";

/*//функции
//function declaration
let num=20; //глобаьлная переменная

function showFirstMessage(text) {
    console.log(text);
    num = 10;//переменные созданные внутри функции называются локальнцми и 
    // они существуют только внутри функции
}

showFirstMessage('hello world');
console.log(num);


//стандартная запись

function calc (a,b) {
    return (a+b); //свойство пишется в конце функции и возвращение 
    //зачения наружу
}
console.log(calc(4,5));
console.log(calc(5,6));
console.log(calc(10,6));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() { //function expression ставим точку с запятой
console.log('hello');
};

logger();
*/

//стрелочная функция

//const calc = (a,b) => a + b;//запись в оду строку
//если же строк больше, то записывать
const calc = (a,b) => {
    console.log('1');
    return a + b;
};


//МЕТОДЫ и свойства у строк и чисел

/*const str = "test";
const arr = [1,2,3];

console.log(arr.length); // это свойство

//console.dir(Number);//выводит какой-то элемент в виде объекта 

//метод изменения регистров*/

const str = ("tEst");

console.log(str.toUpperCase());//это метод стаятся круглы скобки
console.log(str.toLowerCase());//метод 
console.log(str);

//нахождении позиции (поиск подстроки)

const fruit = "Some Fruit";
console.log(fruit.indexOf('fruit'));

//МЕТОДЫ взаимодействия со строками
//1.

const logg = "Hello world!";
//console.log(logg.slice(5));
//промежуто между 6 и 10 выводится, а все остальное вырезается
//если нужно вырезать что-тот одно например слово hello
//просто указываем один аргумент 5
//так же поддерживается запись отрцательных значений

//2.
//console.log(logg.substring);
//такая же как и первая

//3.
console.log(logg.substr(2,5));
//количество которое надо вырезать 

//Метода взаимодействия с числами

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
//console.log(parseInt(test));//преобразование в число
console.log(parseFloat(test));//преобразование числа/строки и возважение в
//десятичном варианте











