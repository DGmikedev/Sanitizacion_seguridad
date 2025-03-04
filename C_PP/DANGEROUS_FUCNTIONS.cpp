
// DANGEROUS_FUCNTIONS

// Descripción de solución:Funcion Obsoleta o que pueda causar un desbordamiento 	
// Igual se soluciono cambiendo el sprintf por sprintf_s	

// Caso 2
// Descripción de solución: Funcion Obsoleta o que pueda causar un desbordamiento
// Igual se solucionó cambiendo: 
// memcpy    
// por memcpy_s
// ejemplo:
    memcpy_s( &pro.cnomsuc,size_t(&proGC.cnomSuc),sTexto,40);


// Caso 3 

// se cambia 
//      atoi 
// por: strtol	
strtol( sTexto, NULL, 10 );

// Caso 4
// 
// Estas funciones pueden exponer información y permitir que un atacante obtenga control total sobre la máquina host.
/* observacion del error:*/    sprintf( cFolios," ");	
/* agregamos formato sprinft nuevo.*/ sprintf(char* buffer, const char* format, ...);

// Caso 5

// Estas funciones pueden exponer información y permitir que un atacante obtenga el control total. sobre la máquina anfitriona.
/* Cambiar */ strlen 
/* por */ strnlen_s	
strnlen_s(cIpPostgrest , sizeof(cIpPostgrest)