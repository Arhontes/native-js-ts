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
})