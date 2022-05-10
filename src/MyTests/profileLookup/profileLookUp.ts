// Setup
export type ContactType = {
    firstName: string,
    lastName: string,
    number: string,
    likes: string[],
}

export function lookUpProfile(contacts:ContactType[], name:string, prop:'firstName'|"lastName"|"number"|'likes') {
    const person:ContactType|undefined = contacts.find(el=>el.firstName===name)
    if(person===undefined){
       return "No such contact"

    }
    if(person[prop]===undefined){
        return 'No such property'
    }
    else{
        return person[prop]
    }

}

