
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";
import {CityType} from "../02/02_02";


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
                stuffCount: 200,
                budget: 200000
            },
            {
                type: "Fire-Station",
                address: {
                    number: 3,
                    street: {
                        title: "Lenina"
                    }
                },
                stuffCount: 200,
                budget: 500000
            }
        ],
        citizensNumber: 1000
    }
})
// 01. Создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be for changed fot HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
});
// 02. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
});


// 03. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});


// 04. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be reduced', () => {
    toFireStaff(city.governmentBuildings[1], 20);

    expect(city.governmentBuildings[1].stuffCount).toBe(180);
});
// 05. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
    toHireStaff(city.governmentBuildings[1], 20);

    expect(city.governmentBuildings[1].stuffCount).toBe(220);
});