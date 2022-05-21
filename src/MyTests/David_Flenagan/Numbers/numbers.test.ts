

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

    const a = Number.parseFloat("63.24sometexthere")
    expect(a).toBe(63.24)
    const b  = + "64"
    expect(b).toBe(64)
    const d = Number(true)
    expect(d).toBe(1)

})

test("parseResult should be correct",()=>{

})
export default {}