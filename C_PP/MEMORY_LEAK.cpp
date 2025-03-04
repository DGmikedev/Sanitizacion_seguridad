
// MEMORY_LEAK

// Descripción solución:  Se quedaba guardado el valor de una variable 
// y se marcaba como Vulnerable Buscar la ultima parte donde se utilizaba la variable
// y hacer un free() 

// para borrar la informacion ya que no se necesitara	
free(datostiendas);