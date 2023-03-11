let userInput : unknown;
let userName : string;

userInput = 5;
userInput = 'Typescript';
userName = userInput as string; //=>> thêm As string
userName = <string> userInput;
if(typeof userInput==='string'){
    userName = userInput;
}