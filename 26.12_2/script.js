'use strict';
//обекты деструктуризация объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors:{
        border: 'black',
        bg: 'red'
    },
    //методы - это действия которые может совершать объект
    //а этот метод мы создаем сами
    makeTest: function(){
        console.log('Test');
    }
};
options.makeTest();

//деструктуризация
const {border, bg} = options.colors;
//мы вытащили кусочки вложеные в свойства в качестве отдельнй переменной
console.log(border);

//console.log(Object.keys(options).length); // получение количества элементов внутри объекта
//это встроенныеметод
//ЗАПОМНИТЬ!!!

//console.log(options.name);

//delete options.name;//опертор удаления
//console.log(options);
//{ width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }
//без строчки тест

//прием счетчика 
/*let counter = 0;

for (let key in options) { //роемся в свойствах 
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
            counter++;  
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);//key это name width и т.д
        //таким обазом мы будем получать значение этого ключа которые перебирается в этой итерации 
        //значений цикла
        counter++;
    }
    
}
console.log(counter);
*/

//ИТОГ
/*
чтобы перебрать мы можем использовать конструкцию for in
у объектов бывают встроенные методы  встроенные свойства
так же мы можем и создавать методы
 */