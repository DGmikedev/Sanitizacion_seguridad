
// 
// IMPROPER_RESOURCE_ACCES_AUTHORIZATION


// Surge al realizar una consulta sql o guardar informacion en un archivo 
// la cual no tenga ningun tipo de autorizacion o este dentro de un metodo que pueda ser reutilizado facilmente

// -Crear una constante String con algo tipo rol="_user_admin" 
// -En cada metodo donde se realiza la consulta SQL, agregar un parametro String role 
// -Justo antes del guardado a un archivo o del executequery de una funcion, validar si role.equals (ROLE), 
//     o en su degecto si tenemos acceso a variables de sesion, podemos validar role con la variable de sesion 
// -Modificar el llamado al metodo anterior para mandarle el valor del parametro role, 
//     en este caso tendria que ser la misma constante ROLE, o si se usan variables de sesion, 
//     el valor de la variable de sesion que usaste para este valor -si es correcto, continuar, sino, 
//     salir de la funcion o lanzar una excepcion 		

