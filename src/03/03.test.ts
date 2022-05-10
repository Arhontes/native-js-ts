import {addTechnologies} from "./03";
import { StudentType} from "../02/02";

let student:StudentType;

beforeEach(()=>{
    student = {
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
})
test("new tech skill should be added", ()=>{
    addTechnologies(student, "C#")
    expect(student.technologies[2].title).toBe("C#")
    expect(student.technologies[2].id).toBeDefined()
})