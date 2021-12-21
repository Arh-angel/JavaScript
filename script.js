/* 1. Реализовать объект пользователя с полями name, lastname ,middleName, birthDate. Реализовать геттер/сеттер fullname, который возвращает одной строкой полное имя пользователя и записывает имя, фамилию и отчество при присвоении значения. Реализовать геттер age, который возвращает возраст используя данные даты рождения. */

// let user = {
//     birthDate: '1993-11-06',
//     get fullName() {
//         return `${this.lastName} ${this.firstName} ${this.middleName}`;
//     },
//     get age() {
//          let age = new Date().getFullYear() - new Date(this.birthDate).getFullYear();

//          return age
//     },
//     set fullName(value) {
//         [this.lastName, this.firstName, this.middleName] = value.split(' ');
//     },
// }

// user.fullName = 'Иванов Иван Иванович';

// console.log(user.fullName);
// console.log(user.age);

/* 2. С помощью замыкания реализовать реализуйте генератор случайных чисел в указанном промежутке (min и max). Важное условие: при генерировании чисел они не должны повторяться. */

// function getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min) + min); 
// }

// console.log(getRandomNum(9, 28))

/* 3. Что выведет функция?  */

/* function f() {
  alert( this ); // window
}

let user = {
    g: f.bind(null) 
};

user.g(); */ // возможно window, работает частичное применение функции, мы как бы создали новую функцию, нам надо было передать в bind что нибудь вместо this и мы передали null, если бы были параметры, можно было бы зафиксировать какой нибудь параметр  

/* 4. Можем ли мы изменить this дополнительным связыванием? */

/* function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } ); нельзя, предпологаю что bind вернет что то типо обьекта, и 2 bind  выдаст ошибку при выполнение 

f(); */

/* 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
В текущей реализации Сообщение не соответствует тому, что мы ожидаем увидеть(“Имя пользователя  logged in” или “Имя пользователя failed to log in”)

Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо). */

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
  
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

/* 6 .Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value */

// let elem = {
//     value: 'Привет',
// }

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// let boundFunc = func.bind(elem);

// console.log(boundFunc('Иванов', 'Иван')); //тут должно вывести 'привет, Иванов Иван'
// console.log(boundFunc('Петров', 'Петр')); //тут должно вывести 'привет, Петров Петр'

/* 7. Есть функция const sum = (a, b, c) => a + b + c, которая складывает три числа. Выполните каррирование. Т.е. напишите вспомогательную функцию currySum, в которую вы передадите функцию sum, и которую можно будет вызвать слуедующим образом -  currySum(a)(b)(c).  */

// const sum = (a, b, c) => a + b + c;

// function currySum(a) {
//     return function(b) {
//         return function(c) {
//             return sum(a, b, c);
//         }
//     }
// }


// console.log(currySum(5)(3)(4))

/* 8. Напишите функцию создания задачи(createTask), принимающая название задачи, которая возвращает функцию смены статуса задачи.
При вызове функции смены статуса возвращается строка с названием задачи и текущим статусом. Список статусов: “Не назначена”, “В работе”, “Тестирование”, “Завершена’. Статус Завершена - присваивается только после передачи флага true и только после тестирования.  Статус Не назначена - только при первом вызове.
  */
// function createTask(taskName) {
//     let status = '';

//     return function task(fl = false) {
//         let flag = fl;

//         if(status === '') {
//             status = `${taskName} - Не назначена`;
//             return status
//         } else if(status === `${taskName} - Не назначена`) {
//             status = `${taskName} - В работе`;
//             return status
//         } else if(status === `${taskName} - В работе`) {
//             status = `${taskName} - Тестирование`;
//             return status
//         } else if(flag === false && status === `${taskName} - Тестирование`) {
//             status = `${taskName} - В работе`;
//             return status
//         } else if(status === `${taskName} - Завершена`) {
//             return status
//         }

//         if(flag === true && status === `${taskName} - Тестирование`) {
//             status = `${taskName} - Завершена`;
//             return status
//         } 
//     }
// }

// const task = createTask('Название задачи');
// console.log(task()) // => ‘Название задачи - не назначена’
// console.log(task()) // => ‘Название задачи - В работе’
// console.log(task()) // => ‘Название задачи - Тестирование’
// console.log(task()) // => ‘Название задачи - В работе’
// console.log(task()) // => ‘Название задачи - Тестирование’
// console.log(task()) // => ‘Название задачи - В работе’
// console.log(task()) // => ‘Название задачи - Тестирование’
// console.log(task(true)) // => ‘Название задачи - Завершена’
// console.log(task()) // => ‘Название задачи - Завершена’
// console.log(task())
