<?php

// POTENTIAL_CLICKJACKING_ON_LEGACY_BROWSERS

header('X-Frame-Options: DENY'); 
header("Content-Security-Policy: frame-ancestors 'none';");

// descripción de la solución: Se Agregan las siguientes cabeceras

/*-- EXAMPLE 2 --*/

// Se agrega el siguiente scrip en el html:
	<script>
		if (self === top) {
			document.documentElement.style.display = 'block';
		} else {  } 
	</script>

?>