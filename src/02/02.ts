//создание объекта с помощью синтаксиса литерала объекта
//creating an object using the object literal syntax
export type StudentType ={
    name:string,
    age:number,
    isActive:boolean,
    address: {
        streetTitle:string,
        city: {
            title:string,
            countryTitle:string
        }
    },
    technologies: Array<{id:number,title:string}>

}

export const student:StudentType = {
    name: "Yakov",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "JS"}
    ]
}

console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[0].title)