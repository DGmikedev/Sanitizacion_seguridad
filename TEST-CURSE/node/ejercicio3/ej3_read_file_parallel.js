const fsparallel = require('node:fs/promises');

Promise.all([

    fsparallel.readFile('./archivo.txt', 'utf-8'),
    fsparallel.readFile('./archivo2.txt', 'utf-8')

])
.then(([salida1, salida2]) => {
    console.log("SALIDA 1: \n" + salida1  + "\n======");
    console.log("SALIDA 2: \n" + salida2  + "\n======");
})