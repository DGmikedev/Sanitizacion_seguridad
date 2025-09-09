// eportar la funion suma 

function suma(a,b){
    return a + b
}


// se exporta por medio de export
// module.exports = suma;    << forma normal de exportación

module.exports = {   // forma recomendada para evitar que 
    suma             // el doc que importa no cambie el nombre
}                    // de la función al usar.
                     //  funciona por que el objeto es exportado con una llave  