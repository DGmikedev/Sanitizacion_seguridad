

// UNCHECKED_RETURN_VALUE

function main(){


    // Ejemplo: la función snprintf retorna la cantidad de caracteres escritos en la variable destino o un número negativo si ocurrió un error.

    i_variable = snprintf( variableDestino, BytesMaximosAsignados, cadenaOrigen); 
    if(i_variable> 0){ lo que se realizará despues de comprobar el valor de retorno }
}


// descripción solución: Se debe a que no se confirma que el valor retornado por un método o función es el esperado	
// Comprobar siempre el valor retornado al usar un método o función.
//  Si la función retorna un valor entero, guardar el valor retornado en una variable de tipo entero y 
// después confirmar si el valor retornado es el esperado. 

// CASO 2
// Las Variables como sprintf_s y memcpy_s, 
// se les necesita agregar un valor de retorno: 
int iCopiados = 0;
bool bCopiados = false;
iCopiados = snprint_f( ctxt_log, sizeof(ctxt_log), "mensaje a mostrar%d " , otra.variable );
if(iCopiados>=0){bCopiados = true;}



