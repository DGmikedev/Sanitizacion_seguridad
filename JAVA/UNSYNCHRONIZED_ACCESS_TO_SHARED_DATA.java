
// UNSYNCHRONIZED_ACCESS_TO_SHARED_DATA


private static HashMap<Integer, IObjectFactory> list_objects_json = new HashMap<>(); 
private JsonObjectFactory(int idObject) throws SQLException, Exception {  
            LOGGER.debug("JsonObjectFactory - Creamos el objeto: " + idObject);
            switch (idObject) {             
                case 1: list_objects_json.put(idObject, new ObtenerValorCmaDal()
                                        .ReadJsonObject(conexionBDts1.ADMIN));
                    break;
                case 2: list_objects_json.put(idObject, new ObtenerConfiguracionesEnCarteraDal()
                                        .ReadJsonObject(conexionBDts2.ADMIN));
                    break;
                case 3: list_objects_json.put(idObject, inicializa());
                break;
                case 4: list_objects_json.put(idObject, new ObtenerConfiguracionesEnCarteraDal()
                                        .leerJosnEstados(conexionBDts3.ADMIN));
                    break;
                default: LOGGER.error("el objeto key [" + idObject + "], de la list_objects_json no fue encontrado");
                    break;
            }
}  
// 
public static final String setUpCertificacion(String JsonSolicitud) { 
    ... syncronized(list_objects_json){ 
        list_objects_json.put(3, objJson); } 
    ... }


// descripción solución:
//     Sucede cuando en una clase tienes una variable privada compartida y esta clase es utilizada 
//     de forma asyncrona por diferentes procesos agregar el block syncronizad(variable) al asignarle valor a la variable compartida	

