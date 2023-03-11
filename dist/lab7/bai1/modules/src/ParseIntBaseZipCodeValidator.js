"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegExpBasedZipCodeValidator = exports.ParseIntBaseZipCodeValidator = void 0;
class ParseIntBaseZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}
exports.ParseIntBaseZipCodeValidator = ParseIntBaseZipCodeValidator;
// export original validator but rename it;
var ZipCodeValidator_1 = require("./ZipCodeValidator");
Object.defineProperty(exports, "RegExpBasedZipCodeValidator", { enumerable: true, get: function () { return ZipCodeValidator_1.ZipCodeValidator; } });
