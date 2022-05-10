const ages =[12,23,5,234,21,31,96,14]

const courses = [
    {title:"Css", price:110},
    {title:"HTML", price:200},
    {title:"React", price:150},
]
test("should take courses cheaper then 160",()=>{
    const cheapPredicate = (courses:CoursesType)=>{
        return courses.price<160
    }
    const cheapCourses = courses.filter(cheapPredicate)

    expect(cheapCourses.length).toBe(2)
})