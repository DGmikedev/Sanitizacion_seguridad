

// INFORMATION_EXPOSURE_THROUGH_AN_ERROR_MESSAGE

// Ejemplo cuando se hace un println 
    ex.getMessage() 
// o en su defecto un 
    printStackTrace()	
 
// Colocar mediante algún log los mensajes de error y no utilizar 
    printStackTrace(), 
// ni tampoco 
    println(ex.getMessage() 

// o algo parecido que al final regrese al servidor el codigo o mensaje de error.	

 Logger.getLogger(BRMServiceImpl.class.getName()).log(Level.SEVERE, null, e);	

// descripción solución:
// Al colocar información que pueda servirle al atacante al lanzar un mensaje de error.


