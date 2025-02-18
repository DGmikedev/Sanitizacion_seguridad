<?php

// MISSING_ENCRYPTION_OF_SENSITIVE_DATA

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

/*--- EXAMPLE 2 ---*/

$formato = '/^\d{4}-\d{2}-\d{2}$/';  
	if (!preg_match($formato, $_POST['dato_a_comparar'])) { // Manejar formato de fecha no válido }


// Descripción de la solución: Creamos el metodo con la condicional if  
//                             y comparamos los parametros utilizando !preg_match


/*-- EXAMPLE 3 --*/

// observacion del error: INPUT_POST
// Línea de codigo del error:  $opcion = filter_input(INPUT_POST, 'opcion',FILTER_SANITIZE_NUMBER_INT);
// creamos una nueva funcion:
	if(isset($_POST['Promotor'])){
		function getPostOrGet($opcion_entrada_post_o_get){
			$var = filter_input(INPUT_POST, $opcion_entrada_post_o_get, FILTER_SANITIZE_SPECIAL_CHARS);
			if(!$var) $var = filter_input(INPUT_GET, $opcion_entrada_post_o_get, FILTER_SANITIZE_SPECIAL_CHARS);
			return $var;
		}
	}

	
/*-- EXAMPLE 4 --*/

	// observacion del error: _POST
	// linea de codigo del error: 
		$dato_1 = isset($_POST['dato_1']) ? filter_var($_POST['dato_1'],FILTER_SANITIZE_FULL_SPECIAL_CHARS) : '1900-01-01'; FILE
	// eliminamos el zanitizante y agregamos el parametro true:  
		$dato_2 = isset($_POST['dato_2',true]) ? filter_var($_POST['dato_2',true],): 0; 
	
?>
