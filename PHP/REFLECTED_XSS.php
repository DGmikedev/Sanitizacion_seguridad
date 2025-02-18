<?php

// REFLECTED_XSS

// 1-se sanitizan las variables que se tienen por parametro:
	header("Content-Disposition: attachment; filename=\"".basename($documento)."\";" );

// 2-se agregan comillas adicionales para permitir nombres de archivos que incluyan un espacio.
	readfile("$documento");

// 3- se agrega exit para finalizar el proceso.
	exit();


/*-- Example 2 --*/
observacion del error: $headers = getallheaders();	    }

    if (!function_exists('getallheaders')){ //creamos la funcion getallgeaders 

		function getallheaders()
		{             
			$headers = [];
			foreach ($_SERVER as $name => $value)          
			{             
				if (substr($name, 0, 5) == 'HTTP_')
					{
						$headers[ 
							str_replace( ' ', '-', 
								ucwords(
									strtolower(
										str_replace(	'_', ' ', 
										substr( $nombre, 5)))))] = $valor;
					}         
			}         
			return $headers;      
		}
	}

?>