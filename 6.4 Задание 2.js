// Написать функцию, которая принимает на входе любое число (но не больше 1 000),
//  определяет, является ли оно простым, и выводит простое число или нет.
// Если введено больше 1 000, то выводится сообщение,
// что данные неверны. Обратите внимание на числа 0 и 1.

// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

function check(num) {
    let simple = 'простое', complicated = 'сложное', notNumber = 'данные не верны';
    if (num <= 0 || num > 1000)
        return notNumber;
    else if (num == 2)
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