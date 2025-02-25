
// LOG_FORGIN

    Pattern newline = Pattern.compile("\n");
    Matcher match = newline.matcher(message);

    return match.replaceAll("\n_");	 
    
    private String _sanitizeMessage(String message) {
        Pattern newline = Pattern.compile("\n");         
        Matcher match = newline.matcher(message);
        return match.replaceAll("\n_");     
    } 

    LOGGER.info(_sanitizeMessage("mensaje"));	

// descripción solución:
// Limpiar la cadena de espacios de saltos de linea


