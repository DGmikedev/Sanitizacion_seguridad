<?php

# FILE_MANIPULATION

$optFirma=array('options'=>array('default'=>0, 'min_range'=>1, 'max_range'=>2));

$optEmpleado=array('options'=>array('default'=>0, 'min_range'=>90000000, 'max_range'=>99999999));

$optCaso=array('options'=>array('default'=>0, 'min_range'=>1, 'max_range'=>2));

$optSol=array('options'=>array('default'=>0, 'min_range'=>1, 'max_range'=>2));

$numeroEmpleado=filter_input(INPUT_GET, 'numeroEmpleado', FILTER_VALIDATE_INT, $optEmpleado);

$firm=filter_input(INPUT_GET, 'firma', FILTER_VALIDATE_INT, $optFirma);

$caso=filter_input(INPUT_GET, 'caso', FILTER_VALIDATE_INT, $optCaso);

$sol=filter_input(INPUT_GET, 'sol', FILTER_VALIDATE_INT, $optSol);

/*-- EXAMPLE:2 --*/

$host = filter_input(INPUT_SERVER, 'HTTP_HOST', FILTER_SANITIZE_STRING);

/*-- EXAMPLE 3 --*/

$folio = filter_input(INPUT_GET, 'folio_ervicio', FILTER_SANITIZE_STRING)



/*-- EXAMPLE --*/

$iImprimir = isset($_POST['imprimir']) ? filter_var($_POST['imprimir'],FILTER_SANITIZE_FULL_SPECIAL_CHARS) : 0; 




# descripción solución: Se realiza la Sanitización de variables que se reciben por parametro





?>