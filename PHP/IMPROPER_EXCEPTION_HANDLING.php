<?php

# IMPROPER EXCEPTION HANDLING

	// En PHP:
	try { 
		$sentencia = $cnxBd->prepare("SELECT trim(fnobteneripservidor) as dato FROM fnobteneripservidor();");   
		$sentencia->execute();   $resulSet = $sentencia->fetchAll();    
	} catch (Exception $e) {  }

# descripción solución: * Se agrega bloque try{}catch(){}

?>