const fs = require('node:fs');


const file = fs.readFileSync('./archivo.txt', 'utf-8'); 

console.log(file);

console.log("HACIENDO OTRAS TAREAS MIENTRAS SE LEE EL PRIMER ARCHIVO? NO LO HACE POR QUE ES SINCRONO");

const file2 = fs.readFileSync('./archivo2.txt', 'utf-8');

console.log(file2);

