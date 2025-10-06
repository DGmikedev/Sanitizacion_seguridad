// return random number
export const num = (strt = -100, stp = 100) => Math.random() * (stp - strt ) + strt ;

// set arrays to test
export let arr2x2 = [ [num(),num()],             [num(),num()] ];
export let arr3x3 = [ [num(),num(),num()],       [num(),num(),num()],       [num(),num(),num()] ];
export let arr4x4 = [ [num(),num(),num(),num()], [num(),num(),num(),num()], [num(),num(),num(),num()], [num(),num(),num(),num()] ];
