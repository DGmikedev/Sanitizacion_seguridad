import { result } from "../results/results.js";
import { iSNumeric } from "../validations/arrayValidations.js";
/**
 * return squre root by BackShali method
 * @param residing number / radicando
 * @param approach number / aproximación
 * @param iteration number / # de iteraciones
 * @returns number
 */
export function getSqRoot(residing, approach, iteration) {
    let errScan;
    // validation block
    errScan = iSNumeric(residing);
    if (!errScan.status)
        return result(false, errScan.msg, NaN);
    errScan = iSNumeric(approach);
    if (!errScan.status)
        return result(false, errScan.msg, NaN);
    errScan = iSNumeric(iteration);
    if (!errScan.status)
        return result(false, errScan.msg, NaN);
    // end block
    try {
        for (let i = 0; i < iteration; i++) {
            approach = metodoBackshaly(residing, approach);
        }
    }
    catch (error) {
        return result(false, error, NaN);
    }
    return result(true, '', approach);
}
function metodoBackshaly(rad, apr) {
    let a = ((Math.pow(apr, 4)) + (6 * (Math.pow(apr, 2)) * rad) + (Math.pow(rad, 2)));
    let b = (4 * (Math.pow(apr, 3)) + (4 * apr) * (rad));
    return a / b;
}
