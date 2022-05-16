import {PropsType} from "./06-destructuring-assigment";

let props: PropsType;


beforeEach(() => {
    props = {
        name: 'Alex',
        age: 32,
        lessons: [{title: '1', count: 1}, {title: '2', count: 2}],
        address: {
            street: "Gagarina"
        }
    }
})
test("f1", () => {


    //const age = props.age

    const {age, lessons} = props
    const {age: vozrast, lessons: uroki} = props

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(vozrast).toBe(32)
    expect(uroki.length).toBe(2)
})


test("f2", () => {
    const [ag1, ag2] = props.lessons
    const [, ...restLesson] = props.lessons
    const [, , ...age] = props.lessons
    expect(ag1.count).toBe(1)
    expect(ag2.count).toBe(2)
    expect(restLesson.length).toBe(1)
    expect(age).toStrictEqual([])

})

/*
function toWeirdCase(string) {
    let splitArray = string.split(" ");
    let newArray = [];
    for (let j = 0; j < splitArray.length; j++) {
        let str = "";
        for (let i = 0; i < splitArray[j].length; i++) {
            if (i % 2) {
                str += splitArray[j][i].toLowerCase()
            } else {
                str += splitArray[j][i].toUpperCase()
            }
        }
        newArray.push(str)
        str = ''
    }
    console.log(newArray.join(' '))
    return newArray.join(' ');
}
*/

// toWeirdCase("This is my codewars kata")
/*

const getString = (string: string) => {
    return string.split(' ')
        .map((word) => {
            return word.split('')
                .map((letter, index) => {return  index % 2 ? letter.toLowerCase() : letter.toUpperCase()
                })
                .join('')
        }).join(' ')
}
getString('I am the best student')
*/
/*
function twoSum(numbers:number[], target:number) {

    let targetArr=[];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if(numbers[i]+numbers[j]===target){
                targetArr.push(i)
                targetArr.push(j)
                return targetArr
            }

        }
    }

}*/
