const os = require('node:os');

console.log("Información del sistema operativo");
console.log("----------------------------------");

console.log("Hostname: " + os.hostname());
console.log("Plataforma: " +os.platform()) ;
console.log("Version de Windows: " + os.release()) ;
console.log("Arquitectura: " + os.arch()) ;
console.log("CORES:");
console.log( os.cpus());
console.log("Memoria libre: " + os.freemem() /1024 / 1024 + " - MB");
console.log("Memoria Total: " + os.totalmem()/1024 / 1024 + " - MB");
