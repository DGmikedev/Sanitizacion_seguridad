<?php

// UNCHECKED_INPUT_FOR_LOOP_CONDITION

$sql = $conexion->prepare(
		"execute procedure procediminto_a_consultar( 6, :filtro1, :filtro2, :filtro3)"
	); 
$year = date('Y', strtotime($filtro1));
$mont = date('m', strtotime($filtro1));
$day = date('d', strtotime($filtro1));

$stmt->bindParam(':año', $year, PDO::PARAM_INT);
$stmt->bindParam(':mes', $mont, PDO::PARAM_INT);
$stmt->bindParam(':dia', $day, PDO::PARAM_INT);

$sql = "SELECT * FROM  procediminto_a_consultar WHERE ano = :año AND mes = :mes AND dia = :dia";

// Descripción de la solución: cambiamos el tipo de parametro	


/*-- EXAMPLE 2 --*/

// observacion del error :  _GET   
$variable = json_decode($_GET['variable',true]);  //  agregamos el parametro true  

// Descripción de la solución: agregamos el parametro true

