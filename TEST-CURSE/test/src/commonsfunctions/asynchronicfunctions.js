export function promiseWithTimeOut(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            return resolve('TIMER FINNISHED')
        }, 1000)
    });
}

export async function getFetchApi(){
    const url = 'https://api.github.com/users/DGmikedev';
    const apires = await fetch(url)
    const respuesta = await apires.json();
    return respuesta
}

export async function get404FromApiGitHub(){
    const url= "https://api.github.com/users/Did´nt exist";
    const resp404 = await fetch(url);
    const data404 = await resp404.json();
    return data404;
}

