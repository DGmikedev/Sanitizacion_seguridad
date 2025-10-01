import { DataTypeError } from './src/results/Error.js';


const text_inicio = "SE INICIA APLICACIÓN";
 try{
    let res = 0/0;
 }catch(error){
    console.log(new DataTypeError("Este es un mensajhe de Error personalizado" + error))
 }


console.log(text_inicio);