const fsAsynAwait = require('node:fs/promises');


// funcion auto invocada
(async()=>{

    console.log("==== INICIO DE LA TAREA DE LECTURA ====");

    await fsAsynAwait.readFile('archivo.txt', 'utf-8')
    .then(resp => {
        console.log("==== 1 ====");
        console.log(resp);
        console.log("==== 2 ====");
    })

    console.log("==== OTRA TAREA A EJECUTAR  ====");

    await fsAsynAwait.readFile('archivo2.txt', 'utf-8')
    .then(resp =>{
        console.log(resp);
    })

    console.log("==== FINAL DEL PROCESO DE LECTURA DE ARCHIVO  ====");

})();