'use strict';

//методы получения элементов со страницы 
//1. getElementbeID
const box = document.getElementById("box");
// ID может быть только один на странице
console.log(box);

//2.getElementsByTagName
const btns = document.getElementsByTagName("button");
console.log(btns);
//тут мы получили не один элемент а псевдомассив, 
//script.js:11 HTMLCollection(5) [button, button, button, button, button]
/*для того чтобы плучить отдельно элементо, 
нужно указать индекс искомого элемента 
1. способ - const btns = document.getElementsByTagName("button")[1];
формат определения переменной, записывая htmlcollection
2. способ - console.log(btns[1])
тут мы используем один кокретный элемент 
естесственно мы получим кнопку вторую, не забывай про нумерацию с 0
Если в структуре будет лиш один элемент, то все равно создастся 
массив с одним элементом, при этом редактировать сам элемнт будет невоможно
нужно всегда указывать индекс*/

//3 способ
const circles = document.getElementsByClassName('circle');
console.log(circles);

//4 способ
const hearts = document.querySelectorAll('.heart');//точка
//помещаем css селектор
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

//5 способ
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);