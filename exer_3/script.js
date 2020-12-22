'use strict';

//циклы

let num = 50;

/*while (num <= 55) {
    console.log(num);
    num++;
}*/

/*do {
    console.log(num);
    num++;
}
while (num < 55);*/

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;//пропустить шаг, но продолжить цикл
    }
    console.log(i);
    
}