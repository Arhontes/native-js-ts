import {filterArrayOfStringBiggerThan, filterArrayOfStringLengthWithFunc} from "./filterTest";

let arrayOfString:Array<string>
beforeEach(()=>{
    arrayOfString = ["a","bb","ccc","dddd","eeeee"]
})

test("count should be correct",()=>{
    const searchValue:Array<string> = filterArrayOfStringBiggerThan(arrayOfString,3)
    expect(searchValue.length).toBe(2)

})
test("count should be correct 2",()=>{
    const searchValue:Array<string> = filterArrayOfStringLengthWithFunc(arrayOfString,s=>s.length>3)
    expect(searchValue.length).toBe(2)

})
test("value should be correct 2",()=>{

    const searchValue:Array<string> = filterArrayOfStringLengthWithFunc(arrayOfString,s=>s==="a")
    expect(searchValue[0]).toStrictEqual("a")

})