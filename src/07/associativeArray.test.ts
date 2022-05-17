import {CarType, getFactoryCountry, getFactoryStreetTitle} from "./associativeArray";

type UsersType = {
    [key: string]: {
        name:string,
        lastName: string
    }
}
let TeslaModel3: CarType;

let users:UsersType;
beforeEach(() => {
    TeslaModel3 = {
        model: "model-3",
        factory: {country: "USA", street: {title: "Potogoniya", house: 3}},
        maxSpeed: 350
    }

    users = {
        "0": {name: "Alex", lastName: "Betke"},
        "1": {name: "Alex", lastName: "Shepherd"},
        "2": {name: "Alex", lastName: "Crown"},
        "3": {name: "Alex", lastName: "Ivanov"},
    }
})
test("factory country should be correct", () => {
    expect(getFactoryCountry(TeslaModel3)).toBe("USA")

})
test("factory street title should be correct", () => {
    expect(getFactoryStreetTitle(TeslaModel3)).toBe("Potogoniya")
})
test("user should be equal", () => {
    expect(users["1"]).toEqual({name: "Alex", lastName: "Shepherd"})
})
test("user should be deleted", () => {
    delete users[1]
    expect(users["1"]).toBeUndefined()
})