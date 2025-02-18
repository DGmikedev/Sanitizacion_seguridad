<?php

// DEPRECATED_FUNCTIONS


Antes                          Despues     
FILTER_SANITIZE_STRING   ->   FILTER_SANITIZE_SPECIAL_CHARS

/* ----------------------------------------------------------------*/

$fecha_formateada = IntlDateFormatter::formatObject( $objeto_fecha,'eee d MMMM y à HH:mm','fr');


/* -----------------------------------------------------------------*/

// Agregamos una cadena 
string	$objPHPExcel->getActiveSheet()
                    ->setCellValueByColumnAndRow( 
						18,  
						$registros, 
						utf8_encode(string $cadena_a_encodificar)): string

/*-----------------------------------------------------------------------------*/

// observacion del error : utf8_decode 
// linea de codigo error: $arrdata['numero'] = utf8_decode($arryDeInfor[$a]['numero']), 

// solucion: agregamos una cadena ISO-8859-1 string 	 
// agregamos una cadena ISO-8859-1  string                                                                                              $arrDatos1['NSS'] = utf8_decode(string $ArrInformacionsub[$b]['nss']): string  



/*-------------------------------------------------------------------------------*/

// observacion del error: strftime
// linea de codigo del error:  
	$date_actual = strftime('%Y%m%d');	
// agregamos formato de fecha nuevo:
	strftime(string $formato, int $timestamp = time()): string 

/*-------------------------------------------------------------------------------*/


?>

