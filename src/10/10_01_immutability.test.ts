import {moveUser, upgradeUserLapTopUser, UserWithLapTop} from "./10_01_immutability";

let user:UserWithLapTop = {
    name: 'Kolyan',
    hair:10,
    laptop:{title:"MSI"},
    address:{title:"Polyarniy"}

}

test("change address",()=>{

    const movedUser = moveUser(user,"Murmansk")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
})

test("upgrade userLapTop",()=>{

    const userCopy = upgradeUserLapTopUser(user,"Macbook")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(user.laptop.title).toBe("MSI")
})