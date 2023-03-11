import { Person } from "./person";

export class Student implements Person {
    firstName: string;
    lastName: string;
    fullName : string;
    middleInitial : string;
    constructor(firstName: string, lastName: string, fullName: string,middleInitial: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.middleInitial= middleInitial;
    }
    

}