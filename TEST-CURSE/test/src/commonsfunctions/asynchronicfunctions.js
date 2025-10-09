export function promiseWithTimeOut(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            return resolve('TIMER FINNISHED')
        }, 1000)
    });
}

export async function getFetchApi(){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
    const apires = await fetch(url)
    const respuesta = await apires.json();
    console.log(respuesta.results)

}

