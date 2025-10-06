import { determinant2x2, determinant3x3,determinant4x4 }  from '../src/arrays/determinants.js';
import { num, arr2x2, arr3x3, arr4x4 } from './utilsObjectsAndArrays.js';

describe('\n== Determinants ==\n', ()=>{

    describe('\n===  functions are right and return correct object { status: , msg:, res: } ===\n', ()=>{
        test('Verifying determinant2x2 function are right and return correct object { status: , msg:, res: }', ()=>{
            // exec functions to test
            let det2x2 = determinant2x2(arr2x2);
             // test
            expect(det2x2).toHaveProperty('status');
            expect(det2x2).toHaveProperty('msg');
            expect(det2x2).toHaveProperty('res');
        });

        test('Verifying determinant3x3 function are right and return correct object { status: , msg:, res: }', ()=>{
            // exec functions to test
            let det3x3 = determinant3x3(arr3x3);
             // test
            expect(det3x3).toHaveProperty('status');
            expect(det3x3).toHaveProperty('msg');
            expect(det3x3).toHaveProperty('res');

        });

        test('Verifying determinant4x4 function are right and return correct object { status: , msg:, res: }', ()=>{
            // exec functions to test
            let det4x4 = determinant4x4(arr2x2);
            // test
            expect(det4x4).toHaveProperty('status');
            expect(det4x4).toHaveProperty('msg');
            expect(det4x4).toHaveProperty('res');

        });
    });
    
    describe('\n=== functions return error DataError: Something are wrong square matrix this have a Not Number: with a null value ===\n', ()=>{
        test('Verifying determinant2x2 function return error DataError: Something are wrong square matrix this have a Not Number: with a null value ',()=>{

            // clone an array 
            let arr2x2copy = structuredClone(arr2x2);
                
            // set null first value of clone
            arr2x2copy[1][0] = null;

            // exec function with null value
            let det2x2 = determinant2x2(arr2x2copy);
                
            // veryfing msg property at det
            expect(det2x2).toHaveProperty('msg');  
                
            // veryfing the presivion message of null, boolean o NaN
            expect(det2x2.msg).toMatch(/^DataError: Something are wrong square matrix this have a Not Number:/ ); 
        });

        test('Verifying determinant3x3 function return error DataError: Something are wrong square matrix this have a Not Number: with a null value ',()=>{

            // clone an array 
            let arr3x3copy = structuredClone(arr3x3);

            // set null first value of clone
            arr3x3copy[0][1] = null;

            // exec function with null value
            let det3x3 = determinant3x3(arr3x3copy);

            // veryfing msg property at det
            expect(det3x3).toHaveProperty('msg');  
            // veryfing the presivion message of null, boolean o NaN
            expect(det3x3.msg).toMatch(/^DataError: Something are wrong square matrix this have a Not Number:/ ); 

        });

        test('Verifying determinant4x4 function return error DataError: Something are wrong square matrix this have a Not Number: with a null value ',()=>{

            // clone an array 
            let arr4x4copy = structuredClone(arr4x4);

            // set null first value of clone
            arr4x4copy[0][2] = null;

            // exec function with null value
            let det4x4 = determinant4x4(arr4x4copy);

            // veryfing msg property at det
            expect(det4x4).toHaveProperty('msg');  
            // veryfing the presivion message of null, boolean o NaN
            expect(det4x4.msg).toMatch(/^DataError: Something are wrong square matrix this have a Not Number:/ ); 

        });
    });

    describe('\n=== functions return message ¡warning determinant = 0! data: with zero determinant ===\n', ()=>{
        test('Verifying determinant2x2 function return message ¡warning determinant = 0! data: with zero determinant', ()=>{
         
            // clone array to test
            let arr2x2copy2 = structuredClone(arr2x2);
            
            // set a vector of this array equal to zero to indetermnant the result
            arr2x2copy2[0][0] = 0;
            arr2x2copy2[0][1] = 0;
            
            //exec functions to test
            let det2x2 = determinant2x2(arr2x2copy2);

            // veryfing msg property at det
            expect(det2x2).toHaveProperty('msg'); 
            // veryfing the presivion message of null, boolean o NaN
            expect(det2x2.msg).toMatch(/^¡warning determinant = 0! data:/);
        });

        test('Verifying determinant3x3 function return message ¡warning determinant = 0! data: with zero determinant', ()=>{
        
            // clone array to test
            let arr3x3copy2 = structuredClone(arr3x3);

            // set a vector of this array equal to zero to indetermnant the result
            arr3x3copy2[0][0] = 0;
            arr3x3copy2[0][1] = 0;
            arr3x3copy2[0][2] = 0;

            //exec functions to test
            let det3x3 = determinant2x2(arr3x3copy2);

            // veryfing msg property at det
            expect(det3x3).toHaveProperty('msg'); 
            // veryfing the presivion message of null, boolean o NaN
            expect(det3x3.msg).toMatch(/^¡warning determinant = 0! data:/);

        });

        test('Verifying determinant4x4 function return message ¡warning determinant = 0! data: with zero determinant', ()=>{
    
            let arr4x4copy2 = structuredClone(arr4x4);
            
            arr4x4copy2[0][0] = 0;
            arr4x4copy2[0][1] = 0;
            arr4x4copy2[0][2] = 0;
            arr4x4copy2[0][3] = 0;

            //exec functions to test
            
            let det4x4 = determinant4x4(arr4x4copy2);

            // veryfing msg property at det
            expect(det4x4).toHaveProperty('msg'); 

            // veryfing the presivion message of null, boolean o NaN
            expect(det4x4.msg).toMatch(/^¡warning determinant = 0! data:/);

        });
    });

    describe('\=== fucntions return DataError: Something are wrong square matrix this have a Not Number with an alphabetic value ===\n', ()=>{
        test('Verifying fucntion determinant2x2  return DataError: Something are wrong square matrix this have a Not Number with an alphabetic value', ()=>{

            // cloning the array to test
            let arr2x2copy3 = structuredClone(arr2x2);
            // set a alphabetic hcararacter at the array to test
            arr2x2copy3[0][0] = 'a';
            // exec the function
            let det2x2 = determinant2x2(arr2x2copy3);
            
            // get msg expected
            expect(det2x2).toHaveProperty('msg');
            expect(det2x2.msg).toMatch(/^DataError: Something are wrong square matrix this have a Not Number:/)
        });

        test('Verifying function determinant3x3 return DataError: Something are wrong square matrix this have a Not Number with an alphabetic value', ()=>{
            // cloning the array to test
            let arr3x3copy3 = structuredClone(arr3x3);

            // set a alphabetic hcararacter at the array to test
            arr3x3copy3[0][0] = 'b';
            // exec the function
            let det3x3 = determinant3x3(arr3x3copy3);
            
            // get msg expected
            expect(det3x3).toHaveProperty('msg');
            expect(det3x3.msg).toMatch(/^DataError: Something are wrong square matrix this have a Not Number:/)
        });

        test('Verifying function determinant4x4 return DataError: Something are wrong square matrix this have a Not Number with an alphabetic value', ()=>{
            // cloning the array to test
            let arr4x4copy3 = structuredClone(arr4x4);

            // set a alphabetic hcararacter at the array to test
            arr4x4copy3[0][0] = 'c';
            
            // exec the function
            let det4x4 = determinant4x4(arr4x4copy3);
            
            // get msg expected
            expect(det4x4).toHaveProperty('msg');
            expect(det4x4.msg).toMatch(/^DataError: Something are wrong square matrix this have a Not Number:/)
        });
    });

});