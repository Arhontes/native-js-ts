

export const filterArrayOfStringBiggerThan=(array:Array<string>, length:number)=>{
    return array.filter(word=>word.length>length)
}
export const filterArrayOfStringLengthWithFunc=(array:Array<string>, func:(props:string)=>boolean) => {
    return array.filter(word=>func(word))
}
