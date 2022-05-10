import {ManType} from "./05_01";

let people: ManType[];

beforeEach(() => {
    people = [{name: 'Andrey Talko', age: 21},
        {name: 'Alex Betke', age: 27},
        {name: 'Anatoliy Talko', age: 60},
        {name: 'Tatyana Betke', age: 62}]
})

test("Should get array of greeting message",()=>{
    const arr = people.map(person=>{return `Welcome ${person.name.split(" ")[0]}!`})
    expect(arr[0]).toBe("Welcome Andrey!")
    expect(arr[1]).toBe("Welcome Alex!")
    expect(arr[2]).toBe("Welcome Anatoliy!")
    expect(arr[3]).toBe("Welcome Tatyana!")
})