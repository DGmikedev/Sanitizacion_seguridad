import { determinant2x2, determinant3x3,determinant4x4 }  from '../src/arrays/determinants.js';

// return random number
const num = (strt = -100, stp = 100) => Math.random() * (stp - strt ) + strt ;
;

// set arrays to test
let arr2x2 = [ [num(),num()],             [num(),num()] ];
let arr3x3 = [ [num(),num(),num()],       [num(),num(),num()],       [num(),num(),num()] ];
let arr4x4 = [ [num(),num(),num(),num()], [num(),num(),num(),num()], [num(),num(),num(),num()], [num(),num(),num(),num()] ];

describe('\n== Determinants ==\n', ()=>{

    test('All determinants return correct object { status: , msg:, res: }', ()=>{
    
    // exec functions to test
    let det2x2 = determinant2x2(arr2x2);
    let det3x3 = determinant3x3(arr3x3);
    let det4x4 = determinant4x4(arr4x4);

    // test
    expect(det2x2).toHaveProperty('status');
    expect(det2x2).toHaveProperty('msg');
    expect(det2x2).toHaveProperty('res');

    expect(det3x3).toHaveProperty('status');
    expect(det3x3).toHaveProperty('msg');
    expect(det3x3).toHaveProperty('res');

    expect(det4x4).toHaveProperty('status');
    expect(det4x4).toHaveProperty('msg');
    expect(det4x4).toHaveProperty('res');

    });

    test('All determinants return error message with a null value', ()=>{

        arr2x2[1][0] = null;
        arr3x3[0][1] = null;
        arr4x4[0][2] = null;
        console.log(arr2x2,
                    arr3x3,
                    arr4x4)
        //exec functions to test
        let det2x2 = determinant2x2(arr2x2);
        let det3x3 = determinant3x3(arr3x3);
        let det4x4 = determinant4x4(arr4x4);
        console.log(det2x2);
        
        //////////////////// 
        // test           //
        ////////////////////

        // verificamos que copntengan la propiedad msg
        expect(det2x2).toHaveProperty('msg');  
        // verificamos que de el mensaje de prevision de null, boolean o NaN
        expect(det2x2.msg).toMatch(/^DataError: Something are wrong square matrix this have a Not Number:/ ); 
        

        // verificamos que copntengan la propiedad msg
        expect(det3x3).toHaveProperty('msg');  
        // verificamos que de el mensaje de prevision de null, boolean o NaN
        expect(det3x3.msg).toMatch(/^DataError: Something are wrong square matrix this have a Not Number:/ ); 
        
        
        // verificamos que copntengan la propiedad msg
        expect(det4x4).toHaveProperty('msg');  
        // verificamos que de el mensaje de prevision de null, boolean o NaN
        expect(det4x4.msg).toMatch(/^DataError: Something are wrong square matrix this have a Not Number:/ ); 
                
    })

    test('All determinants return warning error with zero determinant', ()=>{
        arr2x2[0][0] = 0;
        arr2x2[0][1] = 0;
        
        //exec functions to test
        let det2x2 = determinant2x2(arr2x2);
        
        // verificamos que copntengan la propiedad msg
        expect(det2x2).toHaveProperty('msg'); 


        // arr3x3[0][0] = 0;
        // arr4x4[0][0] = 0;
    })
})