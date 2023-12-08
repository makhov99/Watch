//"use strict"
//СОБЫТИЯ
/*
События-это сигнал поступающие от браузера о том , что что-то произошло.
Клик по клавиатуре, мышкой, прокрутка экрана или загрузка нового окна. 
Все эти события мы можем отлавливать и контролировать.
*/

//Введение в JS события.
/*
Отслеживать возникающие события мы будем с помощью специальных обрабодчиков.

Любому событию можно назначать обрабодчик, то есть функцию, котора сработает
, как только произойдет нужное нам событие. Именно благодаря этим обрабодчикам 
JS модет реагировать на действия пользователья.

Есть несколько способов назначить событию обрабодчик.
*/

//Использование DOM-объекта (не эффективный способ!)
//обращаемся к объекту
/*
const button = document.querySelector('.button');

button.onclick = function () {
    console.log("Клик!");
};
//or
function showConsole() {
    console.log("Клик!");
};
button.onclick = showConsole;
*/
//Важно! Бе круглых скобок
/*
Оба этих способане дают нам повесить несколько обрабодчиков 
на один элемент.Каждый новый, будет перезаписывать предыдущий!
*/


//Основной обрабодчик событий addEventListener/removeEventListener
/*
Существует основной способ назначения обрабодчиков при помощи специальных
методов addEventListener/removeEventListener, которые лишены недостатков 
примеров выше.

Синтаксис 
element.addEventListener(event, hander[, options]);
обращаемся к сонстанте.пишем метод( событие, беземянная функция)
*/
//обращаемся к объекту
/*
const button = document.querySelector('div.button');

button.addEventListener("click", function (e) {
    console.log("Клик!");
});
button.addEventListener("click", function (e) {
    console.log("Клак!");
});
*/

//мы можем вывести наш код в отдельную функцию
//обращаемся к объекту
/*
const button = document.querySelector('div.button');

function showConsole() {
    console.log('Клик!');
    //button.removeEventListener("click", showConsole);
}
button.addEventListener("click", showConsole);
//метод removeEventListener позволяет прекращать повторное воспоизведение функции. Код пишется вконце функции.
*/


//Опции
/*
const options = {
    "capture": false,//фаза на которой должен сработать обрабодчик
    "once": false,//если true, тогда обрабодчик будет автоматически удален после выполнения. Работает как removeEventListener.
    "passive": false//если true, то указывает, что обрабодчик никогда не вызовет prevenDefault().
}
const button = document.querySelector('div.button');

function showConsole() {
    console.log('Клик!');
}
button.addEventListener("click", showConsole, options);
*/

//Объект события
/*
Что бы обработать событие, могут понадобятся детали того, что произошло. Не просто "клик"
или "нажатее клавиши", а также- какие коорденаты указателя мышки, какая клавиша нажата  и 
так далее.

Когда происходит событие, браузер создает объект события, записывает в него детали и передает
его в качестве аргумента функции - обрабодчику.
*/
const button = document.querySelector('div.button');
function showConsole(event) {
    //тип события
    //console.log(event.type);
    //объект на который сработал обрабодчик
    //console.log(event.target);
    //объект к которому назначен обрабодчик
    //console.log(event.currentTarget);
    //положение курсора по оси X
    //console.log(event.clientX);
    //полоение курсора по оси Y
    //console.log(event.clientY);

    //все детали события
    //console.log(event);
}

button.addEventListener("click", showConsole);
//button.addEventListener("mouseenter", showConsole);//срабатывает при наведении мыши

//14:00