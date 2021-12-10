/* 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
 */

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let vegetableLength = vegetables.map(item => item.length);

// console.log( vegetableLength ); // 7,4,7,8

/* 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.
 */
// let numbers = [2, 3, 5, 7, 11, 13, 17]

// let currentSums = (arr) => arr.reduce((newArr, item, index) => {

    // if(newArr.length === 0) {
    //    newArr.push(item)
    // } else {
    //     newArr.push(newArr[index - 1] + item);
    // }

    

    // let sum = 0;

    // for(let i = 0; i <= index; i++) {
    //     sum += arr[i];
    // }

    // newArr.push(sum);

//     return newArr;
//   }, []); 

// console.log(currentSums(numbers)); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

/* 3 Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д. */

// let arr = [0, 1, 2, 3, 4, 5, 6, 7];

// function sumSeven(numbers) {
//     let newArr = [];

//     numbers.forEach(element => {
//         numbers.forEach(item => {
//             if(item + element === 7) {
//                 newArr.push(`${element} + ${item}`);
//             }
//         })
//     });

//     return newArr;
// }

// console.log(sumSeven(arr));

/* 4 Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.  */

// let str = "Каждый охотник желает знать, где сидит фазан."; 

// let foo = str => {
//     return str.split(' ').map(element => element[0])
// }

// console.log(foo(str));  // [К,о,ж,з,г,с,ф]

/* 5 Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.*/

// let str = "JavaScript"; 

// let foo = str => str.split('').map((element, item, arr) => {
//     if(!arr[item - 1]) {
//         return `${element}` + `${arr[item + 1]}`;
//     } else if(!arr[item + 1]) {
//         return `${arr[item - 1]}` + `${element}`;
//     } else {
//         return `${arr[item - 1]}` + `${element}` + `${arr[item + 1]}`
//     }
// }) 

// console.log(foo(str)); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt] 

/* 6 Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.
 */

// let numerics = [5, 7, 2, 9, 3, 1, 8];

// let foo = arr => arr.sort((a, b) => b - a);

// console.log(foo(numerics)); // [9,8,7,5,3,2,1]

/* 7 Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений.
 */
// let a = [1,2,3];
// let b = [4,5,6];
// let c = [7,8,9];
// function getArr(a, b, c) {
//     let newArr = [...a, ...b, ...c];
    
//     return newArr.sort((a, b) => b - a);
// }

// console.log(getArr(a, b, c)); // [9,8,7,6,5,4,3, 2, 1]

/* 8 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение. */

// let arr = [[1, 2, 3], [4, 5], [6]];

// let sum = arr => arr.reduce((sum, current) => {
//     return sum += current.reduce((accum, item) => accum + item)
// }, 0);

// console.log(sum(arr));

/* 9 Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. */

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// let sum = arr => arr.reduce((sum, current) => {
//     return sum += current.reduce((sum, current) => {
//         return sum += current.reduce((sum, current) => sum + current);
//     }, 0);
// }, 0);

// console.log(sum(arr));

/* 10 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке. */

// let arr = [9,8,7,6,5,4,3, 2, 1];

// arr.sort((a, b) => a - b);

// console.log(arr);

/* 11 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. */

// let arr = [5, 1, 2, 2, 3, 1, 8];

// let counter = arr => arr.reduce((sum, item) => {
//     if(sum.result <= 10) {
//         sum.result += item;
//         sum.counter++
//     } 

//     return sum
// }, {result: 0, counter: 0});

// console.log(counter(arr).counter);

/* 12 Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. */

// let arrayFill = (elem, num) => elem.repeat(num).split('');

// console.log(arrayFill('x', 5));

/* 13 Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный. */

// let obj = {
//     name: 'Alexander',
//     age: 25,
// }

// let newObj = Object.assign({}, obj);

// newObj.age = 27;

// let nextObj = {...obj};

// nextObj.age = 30;

// console.log(`первый обьект возрост ${obj.age} новый обьект возрост ${nextObj.age}`)

/* 14 Создайте функцию, которая принимает 1 аргумент - объект пользователя user со свойствами name, age, city. Функция должна возвращать новый объект пользователя с измененным полем name, при этом оригинальный объект user должен остаться неизменным. */

// let obj = {
//     name: 'Alexander',
//     age: 25,
//     city: 'Rostov'
// }

// function newUser(obj) {
//     let newObj = {...obj};
//     newObj.name = 'Vasy';

//     return newObj;
// };

// console.log(newUser(obj));
// console.log(obj);

/* 15 Написать функцию которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of ...).  */

// function sum(...arg) {
//     let sum = 0;

//     for(value of arg) {
//         if(value % 2 === 0) {
//             sum += value;
//         }
//     }

//     return sum;
// }

// console.log(sum(5, 6, 1, 2, 3, 4))

/* 16 Написать функцию, которая принимает слово и возвращает true, если слово является палиндромом. */

// let str = 'онa';

// let palindrome = str => str === str.split('').reverse().join('');

// console.log(palindrome(str));

/* 17 Написать функцию которая будет принимать два массива, и в качестве
результата будет возвращать только те значения которые есть и в первом и во втором массиве. */

// let arr = [5, 6, 7, 2, 3, 6];
// let arrTwo = [9, 16, 7, 2, 53, 6];

// let newArr = (arr, arrTwo) => {
//     let newArr = [];
    
//     arr.forEach(element => arrTwo.forEach(item => {
//         if(element === item) {
//             return newArr.push(item);
//         }
//     }));

//     return newArr;
// }

// console.log(newArr(arr, arrTwo))


