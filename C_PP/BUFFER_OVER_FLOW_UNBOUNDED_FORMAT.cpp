
// BUFFER_OVER_FLOW_UNBOUNDED_FORMAT
// Descripción de la solución: cambiar el 
// Se cambia: sprintf 
// por:       sprintf_s	

sprintf(prog.serv1,"%s",sIp);

// Caso 2

// Desbordamiento de búfer en variable, por exceso de espacio para una cadena insuficiente.
// ====>>>> Cambiar sprintf(), por snprintf() 
// y poner una definición de un rango máximo para cadenas String.	

// Antes:    -- Variable cMsj con un limitante

char cMsj [1024] = {0};  
// Método sprintf()
sprintf(cMsj, "Mensaje a compartir [%s]", cIpSpa);  


// Despues: Incluir la siguiente definición en el área de definiciones

#define MAX_MSG_SIZE 256; // Variable cMsj con la definición establecida
char cMsj[MAX_MSG_SIZE];  // Método sprintf()
// Se cambia: sprintf(), 
// por:         snprintf(), y se agrega el sizeof()
snprintf(cMsj, sizeof(cMsj), "Mensaje a compartir [%s]", cIpSpa); 




