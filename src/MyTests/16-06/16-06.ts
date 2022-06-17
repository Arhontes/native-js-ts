// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((a, v) => a + v, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let args = [].slice.call(arguments, 0, 3).sort((a, b) => a - b);

    if (args[0] + args[1] < args[2]) {
        return "00";
    } else {
        if (a === b && a === c) return "10"
        else if (a === b || a === c || b === c) return "01"
        else return "11"
    }

}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {

    return number.toString().split('').reduce((a, b) => a + +b, 0)

}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    //return arr.reduce((a,v,i)=>i%2===0?a+v:a)>arr.reduce((a,v,i)=>i%2!==0?a+v:a)
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        i % 2 === 0 ? result += arr[i] : result -= arr[i]
    }
    return result > 0
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.filter(el => el > 0 && el % 1 === 0).map(el => el * el)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {


    //return N * (N + 1) / 2;

    let arr = new Array(N+1)
   /* arr.fill(1)
    return arr.reduce((acc,cur,index)=>acc+index,0)
*/

    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        sum += i;
    }
    return sum;

    /*if (N ===0) return 0;
    return N + sumFirstNumbers(N - 1);*/
}


// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}