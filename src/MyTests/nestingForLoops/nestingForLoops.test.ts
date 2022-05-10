import {multiplyAll} from "./nestingForLoops";
let someArray = [[1, 2], [3, 4], [5, 6, 7]];

test("multiply should be correct", ()=>{

     let mult:number = multiplyAll(someArray)
    expect(mult).toBe(5040)
})
