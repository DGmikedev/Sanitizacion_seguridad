const fs = require('node:fs');

const stats = fs.statSync('archivo.txt');


console.log( "Tamaño : " + stats.size );
console.log( "Fichero? : " + stats.isFile() );
console.log( "Directorio? : " + stats.isDirectory() );
console.log( "Es acceso directo? : " + stats.isSymbolicLink());


