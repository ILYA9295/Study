'use strict';

//Условия

if (4 == 9) {
    console.log('ok');
} else{
console.log('error');
}

const num = 50;
/*if (num < 49){
    console.log('error');
} else if(num > 100){
    console.log('much');
} else{
    console.log('ok');
}

//тернарны оператор
(num === 50) ? console.log('ok') : console.log('error');*/


switch (num) {
    case 49:    //switch  только на строгое соответсвие 
    console.log('error');
    break;
    case 100:
        console.log('eerror');
        break;
        case 51:
            console.log('ok');
            break;
            default:
                console.log('not this time');
                break;
}