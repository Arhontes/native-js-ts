import {mult, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})


test('sum should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 1;
    //action
    const result1 = sum(a, b)
    const result2 = sum(a, c)
    //expected result
    expect(result1).toBe(3)
    expect(result2).toBe(2)

})
test('mult should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 1;
    //action
    const result1 = mult(a, b)
    const result2 = mult(a, c)
    //expected result
    expect(result1).toBe(2)
    expect(result2).toBe(1)

})

test("splitting into words should be correct", () => {
    let sent1 = "Hello my friend!"
    let sent2 = "JS - the best programming language"

    let result1 = splitIntoWords(sent1);
    let result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe("my");

    expect(result2.length).toBe(6);
    expect(result2[0]).toBe('js');
    expect(result2.lastIndexOf("the")).toBe(2);
})