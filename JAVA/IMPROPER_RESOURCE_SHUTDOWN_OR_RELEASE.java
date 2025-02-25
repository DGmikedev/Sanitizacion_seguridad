
// IMPROPER_RESOURCE_SHUTDOWN_OR_RELEASE

    finally try { 
        f = new PrintWriter(new BufferedWriter(new FileWriter(fileName,true)));
        //issue at this line
        synchronized(this) {                   
            f.println( new StringBuffer(dateString).append("<")
                .append( 
                    Thread.currentThread().getName() 
                ).append(">")
                .append(traceLog).toString() 
            );
        }
        checkFileSize();
    }catch(IOException e){
            e.printStackTrace(); 
    } finally {
        if (f != null) { f.close(); }
    }	


    // descripción solución:
// No cerrar los recursos de manera adecuada.	
// Cerrar los recursos utilizados, puede ser mediante un bloque 

