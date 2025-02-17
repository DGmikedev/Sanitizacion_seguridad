<?php

# SQL_INJECTION

$optFirma=array('options'=>array('default'=>0, 'min_range'=>1, 'max_range'=>2));

$optEmpleado=array('options'=>array('default'=>0, 'min_range'=>90000000, 'max_range'=>99999999));

$numeroEmpleado=filter_input(INPUT_GET, 'onumeroEmpleado', FILTER_VALIDATE_INT, $optEmpleado);

$firm=filter_input(INPUT_GET, 'firma', FILTER_VALIDATE_INT, $optFirma);

# descripción solución: Se realiza la Sanitización de variables que se reciben por parametro


?>