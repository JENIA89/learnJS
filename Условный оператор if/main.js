// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let officialNameJs = prompt('
        Какое официальное название JavaScript ? ', '
        ');

        if (officialNameJs == 'ECMAScript') {
            alert('Верно!');
        } else {
            alert('Не знаете? ECMAScript!');
        }







        // Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

        // 1, если значение больше нуля,
        // -1, если значение меньше нуля,
        // 0, если значение равно нулю.
        // Предполагается, что пользователь вводит только числа.

        let value = prompt('Введите число', 0);

        if (value > 0) {
            alert(1);
        } else if (value < 0) {
            alert(-1);
        } else {
            alert(0);
        }






        // Перепишите if с использованием условного оператора '?':

        // let result;

        // if (a + b < 4) {
        //   result = 'Мало';
        // } else {
        //   result = 'Много';
        // }

        let a = 3;
        let b = 4;
        let result = (a + b < 4) ? 'мало' : 'много';







        //         Перепишите if..else с использованием нескольких операторов '?'.

        // Для читаемости рекомендуется разбить код на несколько строк.

        // let message;

        // if (login == 'Сотрудник') {
        //   message = 'Привет';
        // } else if (login == 'Директор') {
        //   message = 'Здравствуйте';
        // } else if (login == '') {
        //   message = 'Нет логина';
        // } else {
        //   message = '';
        // }

        let login = prompt('введите логин');

        let message = (login == 'Сотрудник') ? 'Привет' :
            (login == 'Директор') ? 'Здравствуйте' :
            (login == '') ? 'Нет логина' : ''; alert(message);






        // Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false

        let test = true;
        (test == true) ? alert('Верно') : alert('Неверно');

        let test = false;
        (test == true) ? alert('Верно') : alert('Неверно');





        // Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false

        let test = false;
        (test != true) ? alert('Верно') : alert('Неверно');

        let test = true;
        (test != true) ? alert('Верно') : alert('Неверно');