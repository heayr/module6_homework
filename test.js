console.log('test js started');
// ----------------------------------------------------------------------------------------------------

// №1 оформите решение в виде функции, постарайтесь дать этой функции корректное название, 
// вызовите функцию, проанализируйте синтаксис.

const arr3 = [0, 1, 2, null, 'four', 'ef', 2, 0, 2, 1, 'notNumber'];

let oddNumbers = 0;
let evenNumbers = 0;
let zero = 0;
let other = 0;

function typeOfArguments() {
    for (let i = 0; i < arr3.length; i++) {
        if (typeof arr3[i] === 'number') {
        } if (arr3[i] === 0) {
            zero++;
        } else if (arr3[i] % 2 === 0) {
            evenNumbers++;
        } else if (arr3[i] % 1 === 0) {
            oddNumbers++;
        } if (typeof arr3[i] != 'number') {
            other++;

        }
    }
}
typeOfArguments();


console.log(`Кол-во Нулей: ${zero}`);
console.log(`Кол-во чётных: ${evenNumbers}`);
console.log(`Кол-во нечётных: ${oddNumbers}`);
console.log(`Не число: ${other}`);


// ----------------------------------------------------------------------------------------------------

//# 2 Написать функцию, которая принимает на входе любое число (но не больше 1 000),
//  определяет, является ли оно простым, и выводит простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны. 
// Обратите внимание на числа 0 и 1.

// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

let num = 10;

function check(num) {
    let simple = 'простое', complicated = 'сложное', notNumber = 'данные не верны';
    if (num <= 0 || num > 1000)
        return notNumber;
    if (num == 2)
        return simple;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return complicated;
        }
    }
    return simple;
}
console.log(check(1001));
console.log(check(2));
console.log(check(25));
console.log(check(0));
console.log(check(1));
console.log(check('1'));


// ----------------------------------------------------------------------------------------------------

/*#3 Написать функцию, которая принимает число как аргумент и возвращает
функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел.
Выведите в консоль результат.
*/


function first(a) {
    return function (b) {
        return a + b
    }
};

const second = first(2222);
const sum = second(3333);
console.log(`Summery of two functions: ${sum}`);

// ----------------------------------------------------------------------------------------------------

// #4 Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить в консоль,
// начиная от первого и заканчивая вторым. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15.
// Каждую секунду в консоль должно печататься число,
// начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

function numbers(start, end) {
    let current = start;
    let intervalId = setInterval(function () {
        if (current == end) {
            clearInterval(intervalId)
            console.log(current)
        } else {
            console.log(current)
            current++
        }
    }, 1000);

}

numbers(5, 15);


// ----------------------------------------------------------------------------------------------------

/* #5 Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
 Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис. */


const powCheckInteger = (x, y) => {
    if (Number.isInteger(x, y)) {
        const result = Math.pow(x, y);
        console.log(result);
        return result
    } else {
        console.log('Number isn\'t Integer');
    }
}
powCheckInteger(2, 5);
powCheckInteger(7, 11);
powCheckInteger(2.2, 5);

// ----------------------------------------------------------------------------------------------------

