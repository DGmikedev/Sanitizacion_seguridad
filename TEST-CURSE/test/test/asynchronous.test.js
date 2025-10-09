import { promiseWithTimeOut, getFetchApi } from '../src/commonsfunctions/asynchronicfunctions.js'

describe(' === Asynchronous ===', ()=>{
   
    test('promiseWithTimeOut OK', ()=>{
        return expect(promiseWithTimeOut()).resolves.toBe('TIMER FINNISHED')
    })
});

/*
getFetchApi();

promiseWithTimeOut()
.then(res => {
    console.log(res)
})
*/
