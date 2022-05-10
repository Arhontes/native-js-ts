export const multiplyAll = (arr:number[][])=> {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j]
        }
    }
    return product;
};