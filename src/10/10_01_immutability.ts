export type UserType={
    name:string
    hair:number
    address: {
        title:string
    }
}

export type LaptopType={
    title:string
}

export type UserWithLapTop = UserType & {
    laptop:LaptopType
}

export function moveUser(user:UserWithLapTop, newAddress:string){
    return {
        ...user,
        address:{...user.address, title:newAddress}
    }

}
export function upgradeUserLapTopUser(user:UserWithLapTop, newLapTop:string){
    return {
        ...user,
       laptop: {...user.laptop, title: newLapTop}
    }

}