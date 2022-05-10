type AddressType={
    number:number,
    street:{
        title:string
    }
}

export type HouseType={
    buildedAt: number,
    repaired:boolean,
    address:AddressType
}
export type GovernmentBuildingType ={
    type: "Hospital"| "Fire-Station",
    budget:number,
    stuffCount: number,
    address:AddressType
}
export type CityType = {
    title:string,
    houses:Array<HouseType>,
    governmentBuildings: Array<GovernmentBuildingType>,
    citizensNumber: 1000

}