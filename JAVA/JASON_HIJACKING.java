
// JASON_HIJACKING


LeyendasPDF end = gson.fromJson(rs.getString("datos"), LeyendasPDF.class);	

// descripción solución:
// Esto ocurre por lo general cuando se regresa un array del tipo [ ] 
// o un objeto json  ya sea al servidor o desde la bd, esto ocasiona que el atacante pueda cambiar la 
// respuesta del JsonArray, o del objeto, ya que no existe algun tipo de contrato o aseguramiento 
// en el codigo que obligue que el json tenga ciertos campos	
// 
// SOLUCION: 
// #1. Los procedimientos deben regresar el JSON como parametro de salida OUTPUT y en la api se debe registrar 
// el parámetro de salida y cacharlo con un JSONObject.  
// 
// SOLUCION #2. 
// Utilizar una clase para extraer los datos; La estructura del json debe corresponder a la clase 
// con la que se va a extraer sus datos. 
// 
// SOLUCION #3. Convertir todos los objetos JSONObject a su corresponodiente clase, y los JsonArray a un ArrayList<Clase>, 
// estos JSONObject con los que generan la vulnerabilidad.	