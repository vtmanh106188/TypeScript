export class ParseIntBaseZipCodeValidator {
    isAcceptable(s: string) {
        return s.length===5 && parseInt(s).toString() === s
    }
}

// export original validator but rename it;
export {ZipCodeValidator as RegExpBasedZipCodeValidator} from './ZipCodeValidator'