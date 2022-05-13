import {PropsType} from "./06-destructuring-assigment";

let props:PropsType;


beforeEach(()=>{
    props = {
        name: 'Alex',
        age:32,
        lessons: [{title:'1',count: 1},{title:'2',count:2}],
        address: {
            street:"Gagarina"
        }
    }
})
test("f1",()=>{


    //const age = props.age

    const {age, lessons} = props
    const {age:vozrast, lessons:uroki} = props

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(vozrast).toBe(32)
    expect(uroki.length).toBe(2)
})


test("f2",()=>{
    const [ag1, ag2] = props.lessons
    const [,...restLesson]= props.lessons
    expect(ag1.count).toBe(1)
    expect(ag2.count).toBe(2)
    expect(restLesson.length).toBe(1)

})