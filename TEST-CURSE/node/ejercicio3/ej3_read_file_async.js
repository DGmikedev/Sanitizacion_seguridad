const fs = require('node:fs');


console.log("==== INICIA EL PROCESO DE LECTURA ========");
fs.readFile('./archivo.txt', 'utf-8', (err, text)=>{
    console.log(text);
});

console.log("HACIENDO MÁS COSAS? SI POR QUE ES ASINCRONO EL PROGRAMA");

fs.readFile('./archivo2.txt', 'utf-8', (err, text)=>{
    console.log(text);
});

console.log("==== FINALIZA EL PROCESO DE LECTURA ========");

