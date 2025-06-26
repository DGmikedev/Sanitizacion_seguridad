// Remplazo para la funcion 
// strlen

// Fucnion deprecada o peligrosa

char bufferx[20];

bufferx[0] = '\0';

size_t longitud = strlen(bufferx);

if(longitud >= 21 ){
      // código ...........
}

// REMEDIACIÓN  /////////////////////////////////////////////

size_t longitud_bufferx = strnlen(bufferx, sizeof(bufferx));

if(longitud_bufferx >= 21){
    // código ...........
}
