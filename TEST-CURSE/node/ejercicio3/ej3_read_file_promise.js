const fspromise = require('node:fs/promises');

console.log("==== INICIA PROCESO DE LECTURA DE ARCHVIOS  =====");

fspromise.readFile('archivo.txt', 'utf-8')
.then(text =>{
    console.log(text);
})

console.log("==== HACIENDO OTRAS TAREAS MEINTRAS SE LEE EL PRIMER ARCHIVO  =====");

fspromise.readFile('./archivo2.txt', 'utf-8')
.then(text => {
    console.log(text);
});

console.log("==== TREMINA PROCESO DE LECTURA DE ARCHVIOS  =====");

