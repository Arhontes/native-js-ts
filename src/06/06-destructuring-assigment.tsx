import React from "react";


export type PropsType = {
    name: string
    age:number
    lessons: Array<{title:string,count:number}>
    address:{street:string}
}

export const Man:React.FC<PropsType>=({name,age, ...props})=>{
    return <div>{name} {age} {props.lessons[0].title}</div>
}
export const Man2:React.FC<PropsType>=({name,age, ...props})=>{
    return <div>{name} {age} {props.lessons[0].title}</div>
}