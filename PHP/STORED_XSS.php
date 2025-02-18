<?php

// STORED_XSS

header("Cache-Control: public"); 
header("Content-Description: File Transfer"); 
header("Content-Disposition: attachment; filename=$nombre_de_archivo"); 
header("Content-Transfer-Encoding: binary"); 
header("Content-Type: text/plain"); 
readfile($nombre_archivo_en_local);

// explicaion de solución: Se agrega el header Content-Type con el tipo de dato que se va a descargar	

?>