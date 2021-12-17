/* 1. Что будет выведено в консоль? Ответить не запуская код
 */
// function foo() {
//  	console.log(this);
// }
// foo()
//Ответ: undefined  в строгом режиме, window без

/* 2. Что будет выведено в консоль? Ответить не запуская код
 */
// const obj = {
//  name: 'Дмитрий',
//  getName() {
//  console.log(this.name);
// },
// };
// obj.getName();
//Ответ: Дмитрий

/* 3. Что будет выведено в консоль? Ответить не запуская код
 */
// const obj = {
//  name: 'Дмитрий',
//  getName() {
//    function bar() {
//      console.log(this.name);
//    }
//    bar();
//  },
// };
// obj.getName();
//Ответ: undefined

/* 4. Что будет выведено в консоль? Ответить не запуская код
 */
// const obj = {
//  name: 'Дмитрий',
//  getName: () => {
//    function bar() {
//      console.log(this.name);
//    }
//    bar();
//  },
// };
// obj.getName();
//Ответ: undefined

/* 5. Что будет выведено в консоль? Ответить не запуская код
 */
// const obj = {
//  name: 'Дмитрий',
//  getName() {
//    const bar = () => {
//      console.log(this.name);
//    }
//    bar();
//  },
// };
// obj.getName();
//Ответ: Дмитрий

/* 6. Что будет выведено в консоль? Ответить не запуская код */

// const obj = {
//  name: 'Дмитрий',
//  getName() {
//    console.log(this.name);
//  },
// };
 
// const obj2 = {
//  getName: obj.getName,
// };
 
// obj2.getName();
//Ответ: undefined

/* 7. Что будет выведено в консоль? Ответить не запуская код */

// const getName = () => {
//  console.log(this.name);
// };
 
// const obj = {
//  name: 'Дмитрий',
//  getName,
// };
 
// const obj2 = {
//  getName,
// };
// obj.getName();
//Ответ: window
// obj2.getName();
//Ответ: window

/* 8. Что будет выведено в консоль? Ответить не запуская код */

// const obj = {
//  name: 'Дмитрий',
//  friend: {
//    name: 'Владимир',
//    getName() {
//      function innerGetName() {
//        console.log(this.name);
//      }
//      innerGetName();
//    },
//  },
// };
 
// obj.friend.getName();
//Ответ: undefined

/* 9. Что будет выведено в консоль? Ответить не запуская код */

// const obj = {
//  name: 'Дмитрий',
//  friend: {
//    name: 'Владимир',
//    getName() {
//      return function() {
//        console.log(this.name);
//      }
//    },
//  },
// };
//  obj.friend.getName()();
//Ответ: undefined


/* 10. Что будет выведено в консоль? Ответить не запуская код */
// const obj = {
//  name: 'Дмитрий',
//  friend: {
//    name: 'Владимир',
//    getName() {
//      return () =>  {
//        console.log(this.name);
//      }
//    },
//  },
// };
// obj.friend.getName()();
//Ответ: Владимир

// 11. Что будет выведено в консоль? Ответить не запуская код
// const object = {
//  		message: 'Hello, World!',
//  		logMessage() {
//    		console.log(this.message);
//  		}
// };
// setTimeout(object.logMessage, 1000);
//Ответ:  в теории передасться тело метода, но это значение ссылочного типа и поэтому скорее всего операция пройдет без вызова и мы не получим this и результатом скорее всего будет undefined

/* 12. Воспользуйтесь функцией logMessage таким образом, чтобы в консоли увидеть сообщение "Hello, World!"
 */

// const object = {
//  message: 'Hello, World!'
// };
// function logMessage() {
//  console.log(this.message); // "Hello, World!"
// }

//Ответ: object.logMessage = logMessage();


/* 13. Что будет выведено в консоль? Ответить не запуская код */
// var length = 4;
// function callback() {
//  console.log(this.length); // What is logged?       undefined
// }
// const object = {
//  length: 5,
//  method(callback) { 
//    callback();
//  }
// };
// object.method(callback, 1, 2);
//если все как я думаю то передастся в метод тело первой функции и после отработает метод и выведет 5

/* 14. Реализовать объект калькулятора calculator с 3 методами. Первый метод setValues(a, b) присваивает значения свойствам a и b.Второй sum()(обратите внимание, что он не принимает аргументы)  возвращает сумму свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не присвоены. Третий метод mult() возвращает произведение свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не присвоены.
 */

// let calculator = {
//     setValues(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     sum() {
//         if(this.a === undefined || this.b === undefined) {
//             return 'error';
//         } else {
//             return this.a + this.b;
//         }
//     },
//     mult() {
//         if(this.a === undefined || this.b === undefined) {
//             return 'error';
//         } else {
//             return this.a * this.b;
//         }
//     }
// }

// console.log(calculator.setValues(5, 2));
// console.log(calculator.sum());
// console.log(calculator.mult());

/* 15. Дополнительно: сделать в функции setValues(a, b) проверку и разрешить присвоение только чисел, иначе возвращать сообщение об ошибке.
 */

/* let calculator = {
        setValues(a, b) {
            if(!isNaN(a) && !isNaN(b)) {
                this.a = a;
                this.b = b;
            } else {
                return 'Ошибка!!! Введите число';
            }  
        },
        sum() {
            if(this.a === undefined || this.b === undefined) {
                return 'error';
            } else {
                return this.a + this.b;
            }
        },
        mult() {
            if(this.a === undefined || this.b === undefined) {
                return 'error';
            } else {
                return this.a * this.b;
            }
        }
    } */
    
//     console.log(calculator.setValues(5, 3));
//     console.log(calculator.sum());
//     console.log(calculator.mult());

/* 16. Создать объект calculator2 с 3 методами. 1 метод - setVales(a, b) - создать используя метод из предыдущего задания(можно скопировать по ссылке метод из объекта calculator либо создать функцию setValues, как мы делали на лекции и присвоить обоим объектам). 2 метод - div() - возвращает результат деления a на b. 3 метод - diff() - возвращает разность чисел a и b.
 */

// let calculatorTwo = {
// };

// let setValues = (a, b) => {
//     if(!isNaN(a) && !isNaN(b)) {
//         this.a = a;
//         this.b = b;
//     } else {
//         return 'Ошибка!!! Введите число';
//     }  
// };

// calculatorTwo.setValues = setValues;

// calculatorTwo.div = () => this.a / this.b;

// calculatorTwo.diff = () => this.a - this.b;

// console.log(calculatorTwo.setValues(5, 3));
// console.log(calculatorTwo.div());
// console.log(calculatorTwo.diff());

/* 17. Создать объект пользователя  user1 со свойствам name, age, city, favoriteColor и методами setName, setAge, setCity, setFavoriteColor, которые меняют значения соответствующих свойств. Создать объект второго юзера user2 из существующего объекта user1. Изменить значения всех свойств второго юзера с помощью методов setName, setAge, setCity, setFavoriteColor. Вывести в консоль оба объекта и убедиться, что значения свойств разные.
 */

// let userOne = {
//     name: 'Vasya',
//     age: 23,
//     city: 'N.Novgorod',
//     favoriteColor: 'red',
//     setName(newName) {
//         this.name = newName;
//     },
//     setAge(newAge) {
//         this.age = newAge;
//     },
//     setCity(newCity) {
//         this.city = newCity;
//     },
//     setFavoriteColor(newFavoriteColor) {
//         this.favoriteColor = newFavoriteColor;
//     },
// }

// let userTwo = Object.assign({}, userOne);

// userTwo.setName('Nicolas');
// userTwo.setAge(28);
// userTwo.setCity('Monxeton');
// userTwo.setFavoriteColor('Blue');
// console.log(userOne);
// console.log(userTwo);


/* 18. Реализовать функцию, которая принимает в себя любое количество числовых аргументов и возвращает наименьшее число. (не использовать Math.min).*/

// function minNum(...nums) {
//     return nums.sort((a, b) => a - b)[0];
// }

// console.log(minNum(5, 3, 4, 6, 8))

/*Исправьте код таким образом, чтобы вывод логов соответствовал комментариями */
// const func = (user) => {
//   const otherUser = Object.assign({}, user);
//   otherUser.name = 'Дмитрий';
//   otherUser.surName = 'Сидоров';
//   return otherUser;
// }

// const  firstUser = {
//   name: 'Василий',
//   surName: 'Иванов'
// }

// console.log(func(firstUser)) // { name: 'Дмитрий', surName: 'Сидоров' }

// console.log(firstUser) // { name: 'Василий', surName: 'Иванов' }

/* 19. Создайте объекты двух персонажей с именами(name) с числовыми характеристиками уровня(level), силы(strength), ловкости(agility) и интелекта(intellect). 
Для обоих персонажей создайте метод attack, который рассчитывает и возвращает урон атаки путем сложения силы и ловкости, и метод fireball, который возвращает урон файерболом путем умножения интеллекта на уровень персонажа. Далее создайте метод combo, который возвращает сумму значений, которые возвращают методы  attack и fireball. 
После формирования объектов персонажей создайте функцию startFight, которая принимает в себя два объекта и сравнивает результаты вызовов их методов combo и возвращает строку “Победил ИМЯ_ПЕРСОНАЖА”.
 */

class Pers {
    constructor(name, level, strength, agility, intellect) {
        this.name = name;
        this.level = level;
        this.strength = strength;
        this.agility = agility;
        this.intellect = intellect;
    }

    attack() {
        this.strength + this.agility
    }

    fireball() {
        this.intellect * this.level 
    }

    combo() {
        this.attack() + this.fireball()
    }
}

let persOne = new Pers('Poll', 5, 6, 8, 10);
console.log(persOne)

let persTwo = new Pers('Will', 5, 4, 3, 15);
console.log(persTwo)

let startFight = (persOne, persTwo) => {
    if(persOne.combo() > persTwo.combo()) {
        return `${persOne.name} выйграл` 
    } else {
        return `${persTwo.name} выйграл`
    }
} 

console.log(startFight(persOne, persTwo));