import {StudentType} from "../02/02";
import {GovernmentBuildingType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b
}

const result = sum(sum(1, 2), sum(2, 3))

export const addTechnologies = (student: StudentType, skill: string) => {
    student.technologies.push({id: 1, title: skill})
}

export const addMoneyToBudget = (governmentBuilding: GovernmentBuildingType, budget: number) => {
    governmentBuilding.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}
export const toFireStaff = (governmentBuilding: GovernmentBuildingType, stuff: number) => {
    governmentBuilding.stuffCount -=stuff
}
export const toHireStaff = (governmentBuilding: GovernmentBuildingType, stuff: number) => {
    governmentBuilding.stuffCount +=stuff
}