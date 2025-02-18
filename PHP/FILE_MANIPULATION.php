<?php

# FILE_MANIPULATION

$opt=array('options'=>array('default'=>0, 'min_range'=>1, 'max_range'=>2));

$optE=array('options'=>array('default'=>0, 'min_range'=>90000000, 'max_range'=>99999999));

$optC=array('options'=>array('default'=>0, 'min_range'=>1, 'max_range'=>2));

$optS=array('options'=>array('default'=>0, 'min_range'=>1, 'max_range'=>2));

$nmple=filter_input(INPUT_GET, 'nmple', FILTER_VALIDATE_INT, $optmpleado);

$firm=filter_input(INPUT_GET, 'firm', FILTER_VALIDATE_INT, $optirma);

$cso=filter_input(INPUT_GET, 'cso', FILTER_VALIDATE_INT, $optaso);

$sl=filter_input(INPUT_GET, 'sl', FILTER_VALIDATE_INT, $otol);

/*-- EXAMPLE:2 --*/

$host = filter_input(INPUT_SERVER, 'HTTP_HOST', FILTER_SANITIZE_STRING);

/*-- EXAMPLE 3 --*/

$flio = filter_input(INPUT_GET, 'flio_erv', FILTER_SANITIZE_STRING)

/*-- EXAMPLE 4 --*/

$imprimir = isset($_POST['imprimir']) ? filter_var($_POST['imprimir'],FILTER_SANITIZE_FULL_SPECIAL_CHARS) : 0; 

# descripción solución: Se realiza la Sanitización de variables que se reciben por parametro

/*-- EXAMPLE 5 --*/

$fontfile = getcwd()."/php/fnt/".basename(htmlspecialchars($arg[1]));  
$enc = 'cp1252';
htmlspecialchars:  getcwd()."/php/fnt/".basename(htmlspecialchars($arg[1]));	

// Descripción de la solución: Al $arg[1] se concateno la ruta del directerio de trabajo y se uso la instruccion 

/*-- Example 6 --*/

$randomnombre = bin2hex(random_bytes(10)).".txt";  
$filtros = array(  'name_tmp' => FILTER_SANITIZE_URL,  
                          'error' => FILTER_VALIDATE_INT,  
						  'name' => FILTER_SANITIZE_ENCODED,  
						  'type' => FILTER_SANITIZE_SPECIAL_CHARS,  
						  'size' => FILTER_SANITIZE_ENCODED, );  
						  
$archivo_filtrado = filter_var_array($_FILES['upload'], $filtros); 
$archivo_filtrado['name'] = $randomnombre; 
$archivo_filtrado['name_tmp'] = realpath($archivo_filtrado['name_tmp']);  
$datos = CUtilerias::subirArchivoServidor($archivo_filtrado['name_tmp'], 
$directorio_donde_caen_los_archivos.$randomnombre);

// Descripción de la solución: Se genera un nombre random 
//                             Se pone realpath 
//                             Se le aplican filtros a el archivo


$nombre_del_archivo = filter_var($_FILES['param1']['nombre'],FILTER_SANITIZE_SPECIAL_CHARS); 
$ruta = filter_var('/ruta/generica',FILTER_SANITIZE_SPECIAL_CHARS); 

if (move_uploaded_file(filter_var($_FILES['param1']['nombre_temporal'],FILTER_SANITIZE_SPECIAL_CHARS), 
filter_var($sRuta . $nombre_del_archvio,FILTER_SANITIZE_SPECIAL_CHARS)))


?>