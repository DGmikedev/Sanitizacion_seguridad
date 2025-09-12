const readLiner = require('readline');


const handlerln = readLiner.createInterface({
    input:   process.stdin,
    output : process.stdout
});




const url = 'https://bin-ip-checker.p.rapidapi.com/?bin=448590';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b6ed6fbefdmshbace003fa0e1d9ap1d2343jsn0f50daad9bb9',
		'x-rapidapi-host': 'bin-ip-checker.p.rapidapi.com'
	}
};

try {

    fetch(url, options)
    .then( resp => resp.json())
    .then( response => {
        console.log(response);
    })
	// const response = await fetch(url, options);
	// const result = await response.text();
	// console.log(result);
} catch (error) {
	console.error(error);
}

handlerln.question("Presione para salir", ()=>{
    console.log("Adios!");
    handlerln.close(); 
});


