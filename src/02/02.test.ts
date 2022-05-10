import {CityType} from "./02_02";


let city: CityType

beforeEach(() => {
    city = {
        title: 'Onega',
        houses: [
            {
                buildedAt: 2008, repaired: true,
                address: {
                    street: {title: "Gagarina"},
                    number: 4
                }
            },
            {
                buildedAt: 2012, repaired: true,
                address: {
                    street: {title: "Gagarina"},
                    number: 4
                }
            },
            {
                buildedAt: 2016, repaired: true,
                address: {
                    street: {title: "Gagarina"},
                    number: 4
                }
            }],
        governmentBuildings: [
            {
                type: "Hospital",
                address: {
                    number: 3,
                    street: {
                        title: "Lenina"
                    }
                },
                stuffCount: 101,
                budget: 100000
            },
            {
                type: "Fire-Station",
                address: {
                    number: 3,
                    street: {
                        title: "Lenina"
                    }
                },
                stuffCount: 101,
                budget: 100000
            }
        ],
        citizensNumber: 1000
    }
})

test("test city should contains 3 houses", () => {

    expect(city.houses.length).toBe(3)
})
test("test city governmentBuilding should contain 2 buildings", () => {
    expect(city.governmentBuildings.length).toBe(2)
})