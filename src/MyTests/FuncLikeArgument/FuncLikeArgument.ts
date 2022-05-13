
export const getStudent=(someArr:Array<any>, func:(props:any)=>{})=>{
    for (let i =0; i<someArr.length; i++){
        if(func(someArr[i])){
            return someArr[i]
        }
    }
}

export const getSum = (arr:Array<number>, func:(props:number)=>number) => {
    let sum:number = 0;
    for (let i =0; i<arr.length; i++){
        sum  +=  func(arr[i])

    }
    return sum
}