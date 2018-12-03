/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */

/* eslint max-len: "off" */

/**
 * Написать функцию `isDeepEqual`
 * которая принимает на вход двe переменных
 * и проверяет идентичны ли они по содержимому. Например
 * @param {*} objA
 * @param {*} objB
 * @return {boolean} идентичны ли параметры по содержимому
 */

function isDeepEqual(objA, objB) {

    if ((objA.toString() === objB.toString()) && (objA.toString() === "NaN")) {
        return true;
    }
    if ((typeof objA === "string")) {
        if ((objA.localeCompare(objB) === 0)) {
            return true;

        } else
            return false;
    }

    if ((typeof objA == "number") && (objA != objB)) {
        return false;
    }
    if (typeof objA !== typeof objB) {
        return false;
    }
    if (Array.isArray(objA) && Array.isArray(objB)) {
        return JSON.stringify(objA) === JSON.stringify(objB);
    }
    for (let propA in objA) {

        if (objA.hasOwnProperty(propA) && objB.hasOwnProperty(propA)) {

            if (!(objA.propA === objB.propA)) {

                return false;
            }
            if ((objA[propA].toString() === objA[propA].toString()) && (objA[propA].toString() === "NaN")) {
                return true;
            }
            if (typeof objA[propA] == "number") {
                if (objA[propA] !== objB[propA]) {
                    return false;
                }
            }

            if (Array.isArray(objA[propA]) && Array.isArray(objB[propA])) {
                return JSON.stringify(objB.propA) === JSON.stringify(objB.propA);
            }

            if (objA.length !== objB.length) {
                return false
            }
        } else return false;
    }
    return true;
}

/**
 * Функция фиксации контекста
 * @param {*} func Функция для которой нужно зафиксировать контекст
 * @param {*} context значение для this
 * @return {function} функция с зафиксированным контекстом
 */
function bind(func, context) {

    var fn = context;
    return function () {
        func.call(context);
    };
}


/**
 * Реализовать метод .myBind для всех функций,
 * который работает так же как оригинальный .bind но не использует его внутри
 * (можно использовать фукнцию выше)
 */
Function.prototype.myBind = function (func) {
    var pArgs = [].slice.call(arguments, 0);
    var fn = this;
    return function () {
        var args = [].slice.call(arguments, 0);
        [].splice.apply(pArgs, [0, args.length].concat(args));
        return fn.apply(func, args);
    }
};

/**
 * создать объект с волшебным свойством,
 * чтобы при присвоении ему значения, в консоль выводилась текущая дата и значение, которое присваиваем.
 * А при чтении всегда выводилось число на 1 больше предыдущего
 * o.magicProperty = 5; // 'Sat Mar 24 2018 13:48:47 GMT+0300 (+03) -- 5'
 * console.log(o.magicProperty); // 6
 * console.log(o.magicProperty); // 7
 * console.log(o.magicProperty); // 8
 */
var lol = {
    magicProperty: undefined
};
let o = new Proxy(lol, {
    set(target, prop, value) {
        if (prop === "magicProperty") {
            target[prop] = value;
            console.log(Date(Date.now()) + target[prop]);
        }
        return true;
    }, get(target, property) {
        target[property]++;
        return target[property];

    }
});
o.magicProperty = 5;
console.log(o.magicProperty);


/**
 * Создать конструктор с методами, так,
 * чтобы следующий код работал и делал соответствующие вещи
 * те запуск кода ниже должен делать то, что говорят методы
 * u.askName().askAge().showAgeInConsole().showNameInAlert();
 */
function Self() {
    this.age = 0;
    this.name = "";
    this.askName = function () {
        this.name = prompt("askname", 'Nikita')
        return this;
    };
    this.askAge = function () { // вниз по лестнице
        this.age = prompt("askAge", '34')
        return this;
    };
    this.showAgeInConsole = function () { // вывести текущую ступеньку
        console.log(this.age)
        return u;
    };
    this.showNameInAlert = function () {
        alert(this.name);
    };
}

var u = new Self();

//u.askName().askAge().showAgeInConsole().showNameInAlert();

/**
 * Написать фукнцию-калькулятор, которая работает следующим образом
 * calculate('+')(1)(2); // 3
 * calculate('*')(2)(3); // 6
 * Допустимые операции : + - * /
 */
function calculate(str) {
    var val = 0;
    if (str === "*") {
        val = 1;
    }

    function calc(a) {
        val = new Function('', "return " + val + str + a)();
        return calc;
    }

    calc.toString = function () {
        return val;
    };
    return calc;
    /* put your code here */
}

console.log(calculate('+')(1)(2));
console.log(calculate('*')(2)(3));
console.log(calculate('-')(2)(3));

/**
 * Создайте конструктор-синглтон? Что такое синглтон?
 * new Singleton() === new Singleton
 */
var Singleton_B;
(function () {
    var instance;
    var anticlone_proxy;

    Singleton_B = function () {
        if (instance) {
            return instance;
        }

        instance =
            {
                _counter: 0,
                log: function (text) {
                    this._counter++;
                    console.log(text + this._counter);
                }
            }

        anticlone_proxy =
            {
                log: function (text) {
                    return instance.log(text);
                }
            }

        return anticlone_proxy;
    };
})();

/**
 * Создайте функцию ForceConstructor
 * которая работает как конструктор независимо от того,
 * вызвана она с new или без
 * и сохраняет параметры в создаваемый объект с именами параметров
 */
function ForceContructor(a, b, c) {
    throw "undefined";
}

/**
 * Написать фукнцию сумматор, которая будет работать
 * var s = sum();
 * log(s); // 0
 * log(s(1)); // 1
 * log(s(1)(2)); //3
 * log(s(3)(4)(5)); // 12
 * Число вызовов может быть неограниченым
 */
function sum() {
    var val = 0;

    function f(a) {
        val += a;
        return f;
    }
    f.toString = function () {
        return "" +val;
    };
    return f;
}


function log(x) {
    console.log(+x);
}
var s = sum();
 log(s); // 0
 log(s(1)); // 1
 log(s(1)(2)); //3
 log(s(3)(4)(5)); // 12

/**
 * Написать каррирующую функцию и покрыть ее тестами
 * Функция должна поддерживать каррирование функций с 2,3,4,5 параметрами
 * пример работы  функции
 *
 * function target1(a,b,c,d) { return a + b + c + d }
 * function target2(a,b) { return a + b }
 * curry(target1)(1)(2)(3)(4) // 10
 * curry(target2)(5)(8) // 13
 *
 * Примеры тестов смотреть в файле тестов
 *
 * Читать
 * http://prgssr.ru/development/vvedenie-v-karrirovanie-v-javascript.html
 * https://github.com/MostlyAdequate/mostly-adequate-guide-ru/blob/master/ch4-ru.md
 * @param {*} func
 */
function curry(func) {
}

/*
Написать код, который для объекта созданного с помощью конструктора будет показывать, 
что объект является экземпляром двух классов
*/
/* Тут ваш код */
// User === PreUser; // false
// u instanceof User; // true
// u instanceof Array; // true
// u instanceof PreUser; // true

/*
Создать веб страницу. Добавить на нее форму с полями 
- имя (строкое поле), 
- родной город (Выпадающий список), 
- Комментарий (многострочное поле), пол (radiobutton). 
При нажатии на кнопку - нужно собрать данные введенные в поля и вывести их в блоке под формой, 
после чего поля очистить.
*/

/* 
Используя функцию drawCalendar из прошлого урока
создать функцию drawInteractiveCalendar(el)
Которая выводит календарь, в шапке которого отображается
[<] месяц / год [>]
При клике по кнопкам [<] / [>] нужно реализовать листание календаря
Добавть на страницу index.html вызов календаря
*/
function drawInteractiveCalendar(el) {
}


/* mycall * Написать реализацию метода `.myCall`, который будет работать аналогично системному `.call` и покрыть реализацию тестами*/

Function.prototype.myCall = function () {
    var arg = Array.prototype.slice.call(arguments, 1);
    let obj = arguments[0];
    obj = Object(obj);
    obj.fn = this;
    var args = arg.join(",");
    return new Function("obj", "return obj.fn(" + args + ")")(obj);
};
