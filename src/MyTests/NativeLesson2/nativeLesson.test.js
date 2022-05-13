import {findElem, getFiltredArr, getMapped, getNames} from "./nativeLesson";

let arr =[];

beforeEach(()=>{
    arr = [
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

})

test.skip("", ()=>{
    expect(getNames(arr)).toStrictEqual(["Bob","Alex","Nick","John"])
})
test('sfds',()=>{
    let arrs = getMapped(arr,s => s.name)
    expect(arrs).toStrictEqual(["Bob","Alex","Nick","John"])

})
test('sfdds',()=>{


    expect((getFiltredArr(arr,s => s.age>=20).length)).toBe(3)

})

test(" find elem",()=>{


    let elem = findElem(arr,s=>s.name==="Bob")


    expect(elem.name).toBe("Bob")

})
