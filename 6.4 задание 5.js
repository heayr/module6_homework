/* #5 Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
 Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис. */
const pow = (x, y) => {
    const result = Math.pow(x, y)
    console.log(result);
    return result;
}
pow(3, 2);

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
powCheckInteger(2.2, 5);
