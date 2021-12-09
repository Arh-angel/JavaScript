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

