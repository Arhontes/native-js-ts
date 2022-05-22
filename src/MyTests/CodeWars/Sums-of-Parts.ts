/*
export function partsSums(ls) {
    debugger
    const len = ls.length
    let newArray = []
    for (let i = 0; i < len; i++) {
        newArray[i] = (ls.reduce(function (sum, elem) {
            return sum + elem;
        }, 0));
        ls.splice(0,1)
    }
    newArray.push(0)
    return newArray
}
    // ls.slice(0,1)
*/


export function partsSums(ls:number[]){
    let newArray:Array<number> = []
    let sum:number = 0;
    if(ls!==[]){
        for (let i = 0; i < ls.length; i++) {
            for (let j = i; j < ls.length; j++) {
                sum += ls[j]
            }
            newArray[i] = sum
            sum = 0
        }
        newArray.push(0)
        return newArray
    }
    else{
        return [0]

    }

}