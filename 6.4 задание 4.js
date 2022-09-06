// Напишите функцию, которая принимает два числа.
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