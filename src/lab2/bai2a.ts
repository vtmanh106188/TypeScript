enum Role{ADMIN, READ_ONLY, AUTHOR};
const person : {
    name: string,
    age: number,
    hobbies: string[],
    role: number,
    roletuple: [number, string]
} = {
    name: 'Typescript',
    age: 11,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN,
    roletuple: [2, 'author']
}

let favouriteActivites: any[];
favouriteActivites = [5,'Sports',true];

if(person.role === Role.AUTHOR){
    console.log('is author');
}

person.roletuple.push('admin');
person.roletuple[0] = 10;
person.roletuple = [0, 'user'];