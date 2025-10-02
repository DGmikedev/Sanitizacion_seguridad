import { result } from "../results/results.js";
import { iSNumVect, iSNumeric } from "../validations/arrayValidations.js";
/**
 * Fast function to evaluate an array with exponents descendents n-1 to zero
 * @param values        { array }
 * @param valueVaraible { number }
 * @returns  number
 *
 *
    example:   [3,4,5,6,7]  and x = 2
    1.- 3x^4 +   4x^3   + 5x^2    + 6x   + 7
    2.- 3(2)^4 + 4(2)^3 + 5(2)^2 + 6(2) + 7
    3.- return => 119
 */
export function evalPolinmcEqtnDescExponent(values, valueVaraible) {
    let grade = values.length;
    let res = 0;
    //values.push(valueVaraible) // adding valueVariable to main vector of values
    let errScan = iSNumVect(values);
    if (!errScan.status)
        return result(false, errScan.msg, NaN);
    errScan = iSNumeric(valueVaraible);
    if (!errScan.status)
        return result(false, errScan.msg, NaN);
    try {
        values.forEach((num) => {
            grade--;
            res += (num) * (Math.pow(valueVaraible, (grade)));
        });
    }
    catch (error) {
        return result(false, error, NaN);
    }
    return result(true, '', res);
}
