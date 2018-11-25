/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */

/* eslint max-len: "off" */

/**
 * Функция вывода строк для работы в fizzBuzz
 * @param {*} a
 */
function log(a) {
    console.log(a);
}

/* Раместите ваш код ниже */

/**
 * реализовать фукнцию `fizzBuzz`
 * которая выводит числа от 1 до 100.
 * Если число кратно 3 - вместо числа вывести `Fizz`.
 * Если кратно 5 - вывести вместо числа `Buzz`.
 * Если число кратно и 3 и 5 - вывести вместо числа `FizzBuzz`.
 * Для вывода использовать фукнцию `log` (аналогично заданию в классе).
 * В теле функции нельзя использовать  `if`, `switch`, тернарный оператор `? :`
 */
function fizzBuzz() {
    for (let i = 0; i < 101; i++) {
        log((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
    }
}

/**
 * реализовать фукнцию  `isPolindrom`,
 * которая принимает на вход строку и возвращает результат проверки (`true`/ `false` ),
 * является строка полндромом (одинакого читается с лева на право и с права на лево ) или нет
 * @param {string} textString
 * @return {boolean} Является строка полндромом (одинакого читается с лева на право и с права на лево ) или нет
 */
function isPolindrom(textString) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
            return false;
        }
    }
    return true;
}


var weekarr = new Map([
    ["0", "sunday"],
    ["1", "monday"],
    ["2", "tuesday"],
    ['3', 'wednesday'],
    ['4', 'thursday'],
    ["5", 'friday'],
    ["6", "saturday"]
]);

function append(content, target) {
    var div = document.createElement("div");
    div.className = "dayBlock";
    if (content.length > 2) {
        div.className = "capture";
    }
    if (content === "") {
        div.id = "empt";
    }

    var textNode = document.createTextNode(content + ".");
    div.appendChild(textNode);
    target.appendChild(div);

}

/**
 * Реализовать фукнцию `drawCalendar` ,
 * которая принимает три аргумента - год, месяц, htmlElement
 * и выводит в этот элемент календарь на месяц (дни недели начинаются с понедельника ).
 * @param {number} year
 * @param {number} month - номер месяца, начиная с 1
 * @param {external:HTMLElement} htmlEl
 */
function drawCalendar(year, month, htmlEl) {
    for (let i = 1; i < 7; i++) {
        append(weekarr.get("" + i), element);
    }
    append(weekarr.get("0"), element);
    element.appendChild(document.createElement("br"));

    month--;
    var date = new Date(year, month);
    for (let i = 1; i < date.getDay(); i++) {
        append("", element);
    }
    while (date.getMonth() === month) {

        append(date.getDate(), element);
        if (date.getDay() === 0) {
            element.appendChild(document.createElement("br"));
        }
        date.setDate(date.getDate() + 1);
    }
}


/**
 * Написать функцию `isDeepEqual`
 * которая принимает на вход двe переменных
 * и проверяет идентичны ли они по содержимому. Например
 * @param {*} objA
 * @param {*} objB
 * @return {boolean} идентичны ли параметры по содержимому
 */
function isDeepEqual(objA, objB) {
    for (let propA in objA) {
        if (objA.hasOwnProperty(propA) && objB.hasOwnProperty(propA)) {
            if (objA[propA] !== objB[propA]) {
                console.log(objA[propA]);
                console.log(objB[propA]);
                return false;
            }
        } else return false;
    }
    return true;
}
function vector(nice) {
    retarr = new Array();
    var lol = 0;
    h = nice.length;
    var length = nice[0].length;
    for (let i = 0; i < length; i++) {
        retarr[lol] = nice[0][i];
        lol++;
    }
    for (let i = 1; i < nice.length; i++) {
        retarr[lol] = nice[i][length - 1]
        lol++;
    }
    return retarr;
}
/**
 * Написать функцию `spiral` 
 * которая принимает на вход двумерный массив и возвращает 
 * одномерный массив с элементами расположенными по спирали.
 * Матрица не обязательно имеет одинаковые размеры по обеим сторонам:
 * @param {*} kek
 * @return {*} outarr одномерный массив обхода
 */
function spiral(kek) {
    var outarr = new Array();
    while (kek.length !== 0) {
        outarr = outarr.concat(vector(kek));
        kek = matrixReverse(kek);
    }
    console.log(outarr);
    return outarr;
}
/**
 * Написать функцию 'quadraticEquation' 
 * которая на вход принимает коэффициенты квадратного уравнения, 
 * а возвращает массив с вещественными корнями этого уравнения (если они есть).
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]} [*]
*/
function quadraticEquation(a, b, c) {
    let D = b * b - 4 * a * c;
    let x1 = (((-b) + Math.sqrt(D)) / 2 * a);
    let x2 = (((-b) - Math.sqrt(D)) / 2 * a);
    if (x1 === x2) {
        return [x1]
    }
    if (isNaN(x1)) {
        return [];
    }
    return [x1, x2];
}


