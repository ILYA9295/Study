'use strict';

function first() {
    //do something
    setTimeout(function() { //эмуляция задержки на 0,5с
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`я учу ${lang}`);
    callback();
}

function done(){
    console.log('я прошёл этот урок');
}

learnJS('JAvascript', done);
//круглых скобок нет, потому что мы не вызываем функцию,
// а передаем, что бы она была использована
