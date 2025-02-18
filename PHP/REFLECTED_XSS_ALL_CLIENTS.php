<?php

// REFLECTED_XSS_ALL_CLIENTS

$fontfile = getcwd()."/php/fnt/".basename(htmlspecialchars($arg[1]));  
$enc = 'cp1252';
htmlspecialchars:  getcwd()."/php/fnt/".basename(htmlspecialchars($arg[1]));	

// Descripción de la solución: Al $arg[1] se concateno la ruta del directerio de trabajo y se uso la instruccion 

?>