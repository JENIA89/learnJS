// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
sumTo = (n) => {

    if (n == 1) {

        return n;

    } else {

        return n + sumTo(n - 1);

    }

    return n;
}

// ВАРИАНТ 2
sumTo = (n) => {

    let result = 0;

    for (let i = 1; i <= n; i++) {

        result += i;
    }


    return result;

}

// ВАРИАНТ 3 АРИФМЕТИЧЕСКАЯ ПРОГРЕССИЯ
function sumTo(n) {
    return n * (n + 1) / 2;
}



// Вычислить факториал
// важность: 4
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// Определение факториала можно записать как:

// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
factorial = (n) => {

    return (n != 1) ? n * factorial(n - 1) : 1;

}