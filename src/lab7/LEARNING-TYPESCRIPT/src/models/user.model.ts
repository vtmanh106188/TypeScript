export default class user {
    static showName() {
        throw new Error('Method not implemented.');
    }
    fullName: string;

    constructor(fullName: string) {
        this.fullName = fullName;
    }

    public showName() {
        console.log(this.fullName);
        
    }
}