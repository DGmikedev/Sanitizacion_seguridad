
// MISSING_HTST_HEADER

    res.SetHeader("Strict-Transport-Security", "max-age=63072000; includeSubDomains")

// descripción solución:

// en un llamado a un servicio se necesita agregar ese encabezado:	
//     Agregar el siguiente encabezado a la peticion res.SetHeader("Strict-Transport-Security", "max-age=63072000; includeSubDomains")



