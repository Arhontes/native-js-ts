

//delimited value
test("delimited value should be equal ",()=>{
    expect(1000000).toEqual(1_000_000)
})

test("Max value should be equal",()=>{
    const value = Math.max(2,4,6,)
    expect(value).toEqual(6)
})
test("NaN test",()=>{
    let nan = 0/0
    expect(Number.isNaN(nan)).toBe(true)

    nan = Infinity/Infinity
    expect(Number.isNaN(nan)).toBe(true)

    nan = Number.parseFloat("dfsdfs")
    expect(Number.isNaN(nan)).toBe(true)

    const aNan = + "64sometexthere"
    expect(aNan).toBe(NaN)
})

test("number should be correct",()=>{

   /*------------------------------- Как привести строку к числу----------------------------------- */

    //парсим строку в которой первый четыре символа числа получается распарсить из в number
    const a = Number.parseFloat("63.24sometexthere")
    expect(a).toBe(63.24)
    //приводим строку к числу с помощью +
    const b  = + "64"
    expect(b).toBe(64)
    //приводим строку к числу с помощью + , но здесть не получается и результат выражения NaN
    const altB = +"64text"
    expect(altB).toBe(NaN)
    //a здесь получается с помощью Number т.к нет других символов
    const altA = Number("121")
    expect(altA).toBe(121)

    /*------------------------------- приводим boolean к числу----------------------------------- */

    //приводим булевое значения к числу с помощью Number true дает 1
    let d = Number(true)
    expect(d).toBe(1)
    // false - 0
    d = Number(false)
    expect(d).toBe(0)
    //приводим булевое значения к числу с помощью + true дает 1 false 0
    const altD = +false
    expect(altD).toBe(0)
    const altaltD = + true
    expect(altaltD).toBe(1)


    const e = Number(undefined)
    expect(e).toBe(NaN)
    const i = Number(null)
    expect(i).toBe(0)



})

test("isNan should be correct",()=>{

    const a = Number.isNaN('text')
    const b = Number.isNaN(0)
    const c = Number.isNaN('666')
    const d = Number.isNaN(true)


})
export default {}