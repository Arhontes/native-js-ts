import {getStudent, getSum} from "./FuncLikeArgument";

export type StudentType ={
    name:string,
    age:number,
    isMarried: boolean,
    scores: number
}

let someArr:Array<StudentType> ;
let numberArr:Array<number>;
beforeEach(()=>{
    someArr = [
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

    numberArr = [2,4,6]
})

test("name should be correct",()=>{
    const student = someArr.find(el=>el.name==="Bob")
    let name;
    if(student!==undefined){
        name = student.name
    }
    expect(getStudent(someArr, s=>s.name==="Bob")).toStrictEqual(student)
})


test("sum should be correct",()=>{
    const sum = getSum(numberArr, s => s+1)
    expect(sum).toBe(15)
})
