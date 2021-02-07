'use strict';

//действия с элементами на странице

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

    console.dir(box); //просмотр в качестве объекта

// box.style.backgroundColor = 'blue';//изменение цвета в box
// box.style.width = "500px";
//необходимо передавать все в виде строки
//инлайн стили имеет самый высокий приорите
btns[1].style.borderRadius = '100%';
//указываем инекс, чтобы точно обратиться к элементу

//ошибочный вариант 
// circles.style.backgroundColor = 'red';
/*
в консоли выдаст ошибку по причине того, что пытаемся обратиться не к 
конткретному элементу, а к псевдомассиву, а он ничего не знает об объекте style
это просто структура, которая содержит элементы. 
Для того чтобы все работало, необходимо четко указать элемент,
над которым будут производиться действия 
*/
//верный варент
circles[0].style.backgroundColor = 'red';

//назначаем несколько инлайн стилей 
box.style.cssText = 'background-color: blue; width: 500px';
// box.style.cssText = `background-color: blue; width: ${num}px `;
//такая структура полезно для динамических преобразований

// for (let i =0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'green';
// }
/*запускаем новый цикл, указываем что  переменный итератор раве нулю, перебирая
элементы в массивах чаще будем указывать 0, т.к. нумерация массивах идет 
с 0 индекса и перебираются по порядку
далее указывается, что наш цикл буде работать до тех пор 
у нас остануться количество элементов внутри этого псевдомассива
в свойстве length указаны элементы и цикл будет 
рабоать пока не переберет все количество элементов в этом свойстве.
теперь чтобы что-то сделать с каждым элементом внутри обрааемся к псевдомассиву
чтобы получить какой-то элемент в квадратных скобках ставим переменный итератор 
чтобы постпенно получать элементы, начиная с 0 и до n-го, далее вносим 
изменения 
*/

//следующий метод
hearts.forEach(item=> {
item.style.backgroundColor = 'blue';
});
//сдесь в коллбэке, который передается в  foreach второй аргумент обозначает 
//номер по порядку,а третий имеет ссылку на тот массив, который мы перебираем 


//изучение основных методов для работы с элементами страницы

//создаем переменную, обращаемся к document  и используем метод сreateElement 
//в круглых скобках пишем названием тэга, который мы создаем
const div = document.createElement('div');
//всё элемент создан и он существует только внутри JS
//на станице он никак не появится 

//так же можно создавать текстовые узлы 
//это элементы без оболочки тэга
//const text = document.createTextNode('тут был я');

div.classList.add('black');
//методы для добавления элементов перед и после других элементов
// document.body.append(div);
//append - добавляет в конце родитяля какой-то элемент
wrapper.append(div);
//так как мы внесли wraper в переменные запись
//document.querySelector('.wrapper') не нужно
//прочто пишем wrapper
//старый стиль 
// wrapper.appendChild(div);


// wrapper.prepend(div);
// prepend добавляет элемент перед роителем
// черный блок будет над сердечками 

// hearts[0].before(div);
// hearts[0].after(div);

//старая форма записи
// wrapper.insertBefore(div, hearts[1]);

//методы по удалению элементов со страницы
// circles[0].remove();
//удаляет первый кружочек

//старая форма записи
// wrapper.removeChild(hearts[1]);


//метод замены одного элемента другим
//hearts[0].replaceWith(circles[0]);

//старая форма
// wrapper.replaceChild(circles[0], hearts[0]);

//вписываем текст в наш div
div.innerHTML = "<h1>Hello world</h1>";
//метод работает со всей html структурой 

//второй вариант
// div.textContent = 'hello';
//только с текстом

// div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');
//вставляет html код перед элементом
//над черным квадратом пявилась надпись 

// div.insertAdjacentHTML('afterbegin','<h2>Hello</h2>');
//вставляет html код в начало элементом
/*будет вставлено в div black*/

// div.insertAdjacentHTML('beforeend','<h2>Hello</h2>');
//вставляет html код в конце элемента

// div.insertAdjacentHTML('afterend','<h2>Hello</h2>');
//вставляет html код после элемента


