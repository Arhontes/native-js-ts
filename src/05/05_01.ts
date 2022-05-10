export type ManType = {
    name: string,
    age: number
}
const people: ManType[] = [
    {name: 'Andrey Talko', age: 21},
    {name: 'Alex Betke', age: 27},
    {name: 'Anatoliy Talko', age: 60},
    {name: 'Tatyana Betke', age: 62},

]

const devs = [
    {stack:["js","css","html"],
    firstName:"Alex",lastName:"Betke" },

    {stack:["js","css","html"],
    firstName:"Alex",lastName:"Siziy" },

    {stack:["js","css","html"],
    firstName:"Alex",lastName:"Petrov" },
]

export const personTransformator = (man:ManType)=>{
    return{
        stack:["js","css","html"],
        firstName:man.name.split(" ")[0],
        lastName:man.name.split(" ")[1]
    }
}

const developers = people.map(person=>{return personTransformator(person)})