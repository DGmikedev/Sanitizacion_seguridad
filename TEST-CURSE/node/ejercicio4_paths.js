const path = require('node:path');

// saber separador del sistema
console.log("SEPARADOR: " + path.sep);

// unir nombres de carpetas para hacer un path

const fpath  = path.join('carpeta', 'subcarpeta', 'archivo.txt');

console.log("PATH: " + fpath);

// obtener el nombre del archivo sin extension

const nombre = path.basename(fpath, '.txt'); // el segundo para,etro quita la extension del archivo

console.log("NOMBRE DEL ARCHIVO: " + nombre);

// obtener la extension del archivo

const ext = path.extname(fpath);

console.log("EXTENSION DEL ARCHIVO: " + ext);