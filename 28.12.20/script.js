"use strict";

//Массивы и псевдомассивы

const arr = [1, 2, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b) {
    return a - b;
}

//почитать алгоритмы 

//arr[99] = 0;
//сonsole.log(arr.length);
//стостоит из последнего индекса в массиве + 1

//arr.forEach(function(item, i, arr){
 // console.log(`${i}: ${item} внутри массива ${arr}`);
//});

//arr.pop();//удление последнего элемента с массива
//[ 1, 2, 3, 6 ]

//arr.push(10);//добавляет заданный элемент в конец массива
//[ 1, 2, 3, 6, 8, 10 ]
//console.log(arr);

//for (let i = 0; i < arr.length; i++){
  //  console.log(arr[i]);
//} //перебор элементов 

//for (let value of arr) {
   // console.log(value);
//}//второй пособ перебора элементов но:
/*
работает с массивоподобными сущностями
 */

 const str = prompt('', '');
 const products = str.split('', '');
 products.sort();//сортирует элементы как строки
 console.log(products.join('; '));
