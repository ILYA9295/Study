'use strict';
//обекты деструктуризация объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors:{
        border: 'black',
        bg: 'red'
    }
};

//console.log(options.name);

//delete options.name;//опертор удаления
//console.log(options);
//{ width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }
//без строчки тест

//прием счетчика 
let counter = 0;

for (let key in options) { //роемся в свойствах 
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);  
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);//key это name width и т.д
        //таким обазом мы будем получать значение этого ключа которые перебирается в этой итерации 
        //значений цикла
        counter++;
    }
    
}
console.log(counter);

