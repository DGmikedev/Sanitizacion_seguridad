import { promiseWithTimeOut, getFetchApi, get404FromApiGitHub } from '../src/commonsfunctions/asynchronicfunctions.js'

describe(' === Asynchronous ===', ()=>{
   
    test('promiseWithTimeOut OK', ()=>{
        return expect(promiseWithTimeOut()).resolves.toBe('TIMER FINNISHED')
    })

    test('Get Id user from API github', ()=>{
        const response = getFetchApi();
        return expect(response).resolves.toHaveProperty('id', 186120279);
    })

    test('Get a 404 status from API gitHub', ()=>{
        const data404 = get404FromApiGitHub();
        return expect(data404).resolves.toHaveProperty('status', "404")
    })
});

