<?php

# SQL_INJECTION EN QUERY

	$sentencia = $cnxBd->prepare("
		SELECT columnas_a_buscar
		FROM fnAConsultar (:id,:id_2,:id_3);"); 
		
	$sentencia->bindParam(":id",   $var_php_id1, PDO::PARAM_INT); 
	$sentencia->bindParam(":id_2", $var_php_id2, PDO::PARAM_STR); 
	$sentencia->bindParam(":id_3", $var_php_id3, PDO::PARAM_STR); 
	$sentencia->execute();  $resulSet = $sentencia -> fetchAll();

# descripción solución: Se cambia el método para preparar la consulta sql CONSLTA PREPRADA


?>