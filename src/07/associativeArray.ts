export type FactoryType={
    country:string
    street:{
        title:string
        house: number
    }

}
export type CarType={
    model:string
    maxSpeed:number
    factory: FactoryType
}
export const getFactoryCountry=(props:CarType)=>{
    return props.factory.country
}
export const getFactoryStreetTitle=(props:CarType)=>{
    return props["factory"]["street"]["title"]
}

