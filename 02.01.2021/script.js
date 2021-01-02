'use strict';
//отдавлваем ошибки в своем коде
//breakpoints

//ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ
//преобразование типов данных

//TO STRING

//1
console.log(typeof(String(null)));
console.log(typeof(String(5)));

//2 конкоцинация 
console.log(typeof(5 + ''));
//слоение строк или сложение строк с чем-то 
//со сложением со строкой у нас получается строка 

const num  = 5;
console.log("htttps://vk.com/catalogue/" + num);//устаревшая часть

const fontSize = 26 + 'px';
//создается строка которая потом может использоваться в стилях



//TO NUMBER

//1
console.log(typeof(Number(4)));

//2 унарный плюс +
console.log(typeof(+'5'));

//3 parseInt
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('hello', '');

//всё что мы получаем от пользователя будет типом данных строка 
//значения из промтов, данные из тегов и т.д.



//TO BOOLEAN

//1
//0, '', null, undefined, NaN;
//всё это будет превращаться в false, 
//строка с пробелом ' ' - является непустой строкой.

let switcher = null;
if (switcher){
    console.log('working...');
}

switcher = 1;
if (switcher){
    console.log('working...');
}

//2
console.log(typeof(Boolean(4)));

//3
console.log(typeof(!!"44444"));



