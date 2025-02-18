<?php

# SQL_INJECTION

$op=array('options'=>array('default'=>0, 'min_range'=>1, 'max_range'=>2));

$opmp=array('options'=>array('default'=>0, 'min_range'=>90000000, 'max_range'=>99999999));

$nmermpleado=filter_input(INPUT_GET, 'nmermpleado', FILTER_VALIDATE_INT, $opteado);

$firm=filter_input(INPUT_GET, 'firm', FILTER_VALIDATE_INT, $optirma);

# descripción solución: Se realiza la Sanitización de variables que se reciben por parametro


?>