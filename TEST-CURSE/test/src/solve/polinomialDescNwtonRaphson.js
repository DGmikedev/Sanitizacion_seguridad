import { evalPolinmcEqtnDescExponent } from "./evalPolinmcEqtnDescExponent.js";
import { getRepresentEquationPolinomial, setRprstDerivEq } from "../representations/literals.js";
import { result } from '../results/results.js';
import { iSNumVect } from "../validations/arrayValidations.js";
import { isALetterFrmAlph } from "../validations/singleValues.js";
/**
 * Solve a polinomial equation with descendent exponent by Newton-Raphson method
 * @param valuesi   { array }
 * @param rangei    { array }
 * @param variablei { char alphabetic }
 * @returns
 *
 *
 * [ 3, 4, -1, 2, 2, -2 ];  <- values of equation
 *  [-10,10];               <- range of  calculate
 *  'x';                    <- variable to represent
 *
 * '3x^5+4x^4-x^3+2x^2+2x-2',
 * '15x^4+16x^3-3x^2+4x+2',
 * Set(3) { -1.527823613025671, -1, 0.5423061437402046 }
 *
 */
export function polinomialDescNwtonRaphson(valuesi, rangei, variablei = 'x') {
    // [ 3, 4, -1, 2, 2, -2 ];    [-10,10], 'x'
    let variable = variablei;
    let values = valuesi;
    let rangeToEval = rangei;
    let degrees = [];
    let valuesDerivates = [];
    let resul = '';
    let eq = '';
    let eqDeriv = '';
    let aproach = [];
    let scanErr;
    let tmp = '';
    // block of validations
    scanErr = iSNumVect(valuesi);
    if (!scanErr.status)
        return result(false, scanErr.msg, NaN);
    scanErr = iSNumVect(rangei);
    if (!scanErr.status)
        return result(false, scanErr.msg, NaN);
    scanErr = isALetterFrmAlph(variablei);
    if (!scanErr.status)
        return result(false, scanErr.msg, NaN);
    // end block of validation
    // setValues;
    // load the vector of the degrees values in the polynomial
    for (let i = values.length; i > 0; i--) {
        degrees.push(i - 1);
    }
    // load the vector of the derivates values of the equation
    for (let i = 0; i < values.length; i++) {
        i < values.length - 1 ? valuesDerivates.push(values[i] * degrees[i]) : "";
    }
    // [ eq, eqDeriv ] = getsEquationsRepresentations();
    tmp = getRepresentEquationPolinomial(values, degrees, variable); // representation of the polynomial Descendent
    if (!tmp.status)
        return result(false, 'Error to get Equation : ' + tmp.msg, NaN);
    eq = tmp.res;
    // get representation of quation derivate
    tmp = setRprstDerivEq(values, degrees, variable);
    if (!tmp.status)
        return result(false, 'Error to get Equation : ' + tmp.msg, NaN);
    eqDeriv = tmp.res;
    aproach = getAproach(values, rangeToEval);
    resul = polinomialNwtonRaphson(values, valuesDerivates, aproach);
    return result(true, '', [eq, eqDeriv, resul]);
}
function getAproach(values, rangeToEval) {
    let resolution = 0.25;
    let aproach = 0;
    let cont = 0;
    let zeros = [];
    let flagChange = [];
    for (let i = rangeToEval[0]; i < rangeToEval[1]; i += resolution) {
        //  get evaluation of the polynomial
        aproach = evalPolinmcEqtnDescExponent(values, i).res;
        if (i == rangeToEval[0]) { // only first iteration
            aproach > 0 ? flagChange[0] = true : flagChange[0] = false; // set the flag of change
            cont++;
        }
        else { // if isn't the first iteration
            aproach > 0 ? flagChange[cont] = true : flagChange[cont] = false; // save the next value of flag
            if (flagChange[cont] !== flagChange[cont - 1])
                zeros.push(i); // if flag changes, saves the i vaule
            cont++;
        }
    }
    return zeros; // returns all values when flag has changed
}
function polinomialNwtonRaphson(values, valuesDerivates, range) {
    let f_x = 0;
    let f_dx = 0;
    let xn = 0;
    let roots = new Set();
    range.forEach((value) => {
        f_x = evalPolinmcEqtnDescExponent(values, value).res; // funcion con aproximación
        f_dx = evalPolinmcEqtnDescExponent(valuesDerivates, value).res; // deribada con aproximación 
        xn = value - (f_x / f_dx); // raiz resultante
        for (let i = 0; i < 20; i++) { // ciclo de iteraciones
            f_x = evalPolinmcEqtnDescExponent(values, xn).res;
            f_dx = evalPolinmcEqtnDescExponent(valuesDerivates, xn).res;
            xn = xn - (f_x / f_dx);
        }
        roots.add(xn);
    });
    return roots;
}
/*
function getsEquationsRepresentations(){

    const reprfx   = getRepresentEquationPolinomial(values, degrees, variable).res  // representation of the polynomial Descendent
    const reprfdx  = setRprstDerivEq(values, degrees, variable).res                 // representation of the polynomialDerivate Descenedent
    return [reprfx , reprfdx ];

  }


 /**
   * load the values to degree and derivate vectors
   * return void
   */ /*
function setValues(){

 // load the vector of the degrees values in the polynomial
 for(let i = values.length;  i > 0 ; i--){ degrees.push(i-1) }
  
 // load the vector of the derivates values of the equation
 for(let i = 0; i < values.length; i++){
   i < values.length-1 ? valuesDerivates.push( values[i] * degrees[i]) : "";
 }
}   */
