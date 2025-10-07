// document to eval
import { getInvArr2x2, isInvers2x2 } from "../src/arrays/invers.js";  
import { determinant2x2, determinant3x3, determinant4x4 } from "../src/arrays/determinants.js";
import { num, arr2x2, arr3x3, arr4x4 } from './utilsObjectsAndArrays.js';

// get array 2x2
const arr2x2clc = arr2x2;

// get determinant of array 2x2
let det2x2 = determinant2x2(arr2x2clc);

// exec the function ang we rescue res property
let invArr2x2 = getInvArr2x2( arr2x2clc, det2x2.res );

// an Array with error
let arrayErr = [ ['a', 2], [3,9] ];

// an Array with error # 2
let arrayErr2 = [ [3,9] ];

describe('\n=== Ineverse ===\n',()=>{

    test('Verifying that the getInvArr2x2 function return a object { status: , msg:, res: }', ()=>{
        expect(invArr2x2).toHaveProperty('status', true);
        expect(invArr2x2).toHaveProperty('msg', '');
        expect(invArr2x2).toHaveProperty('res');
        expect(Array.isArray(invArr2x2.res)).toBe(true);
    });

    test('Verifying that the getInvArr2x2 function return an array with length greather than zero', ()=>{
        invArr2x2.res.forEach(arr => {
                expect( Array.isArray(arr) ).toBe(true)
                expect( arr.length ).toBeGreaterThan(0)
        })
    });

    test('Verifying that the getInvArr2x2 return a message DataError: Something are wrong square matrix this have a Not Number: ', ()=>{
        let det2x2Err    = determinant2x2(arrayErr);
        let invArr2x2Err = getInvArr2x2( arrayErr, det2x2Err.res );
        expect(invArr2x2Err).toHaveProperty('msg');
        expect(invArr2x2Err.msg).toMatch(/^DataError: Something are wrong square matrix this have a Not Number:/)
    });

    test('Verifying that the getInvArr2x2 return a message Determinant is equal to zero', ()=>{
        let det2x2Err    = determinant2x2(arrayErr);
        let invArr2x2Err = getInvArr2x2( arr2x2clc, 0 );
        expect(invArr2x2Err).toHaveProperty('msg');
        expect(invArr2x2Err.msg).toMatch(/^Determinant is equal to zero/)
    });

    test('Verifying that the getInvArr2x2 return a message DataError: Error value is NOT a Number [ char ] [getInvArr2x2[][x]] when determinant is a char', ()=>{
        let det2x2Err    = determinant2x2(arrayErr);
        let invArr2x2Err = getInvArr2x2( arr2x2clc, 'A' );
        expect(invArr2x2Err).toHaveProperty('msg');
        expect(invArr2x2Err.msg).toMatch(/^DataError: Error value is NOT a Number/)
    });

    // Determinant is equal to zero
});

describe(" === Is Inverse ===", ()=>{
    test('Verifying isInvers2x2 function works correctly with { status, msg, res }', ()=>{
        const isInv = isInvers2x2(arr2x2clc, invArr2x2.res );
        expect(isInv).toHaveProperty('msg')
        expect(isInv).toHaveProperty('status')
        expect(isInv).toHaveProperty('res')
    })
})