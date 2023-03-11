"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class user {
    constructor(fullName) {
        this.fullName = fullName;
    }
    static showName() {
        throw new Error('Method not implemented.');
    }
    showName() {
        console.log(this.fullName);
    }
}
exports.default = user;
