import {student} from "../../02/02";

let arr = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
/*const namesArr = students.map(student=> student.name)*/

export const getMapped = (arr, func) => { // (func(arr[g]) - s => (func(arr[g].name) s.name
    const result = []
    for (let g = 0; g < arr.length; g++) {
        const newValue = func(arr[g])
        result[g] = newValue
    }
    return result
}

export const getFiltredArr = (arr, func) => {
    const result = []
    for (let g = 0; g < arr.length; g++) {
        if (func(arr[g])) {
            result.push(arr[g])
        }
    }
    return result
}

export const findElem = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {          //s=>s.name==="Bob"
            return arr[i]
        }
    }
}


function plus1(x,func) {
    let sum = x+x

    return func(sum)
}
let sum1 = plus1(3, s=> {return s})
console.log(sum1)

let square = function(x){
    return x*x
 }
let square2 = (x)=>x*x

square(2)

square2(2)