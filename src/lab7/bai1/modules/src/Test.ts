import validate from './StaticZipCodeValidator';
let strings  = ['Hello','98052','101']

// Use function validate 

strings.forEach(function(s){
    console.log(`"${s}" ${validate(s) ? "matches" : "does not match"} `);
})