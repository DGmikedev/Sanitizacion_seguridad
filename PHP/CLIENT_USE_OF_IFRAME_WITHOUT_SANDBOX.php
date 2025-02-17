<?php

# MISSING_HSTS_HEADER

#Agregar en el archivo HTML  la siguiente instruccion 
?>

<iframe id="f-contenedor-reporte" src="" sandbox></iframe>. 

<?php 

# En el archivo javascript agregarle el atributo
  <script>
    // JQUERY
	$("#f-contenedor-reporte").attr("sandbox", "allow-same-origin allow-scripts");
  </script>
  
# descripción solución: Agregar el atributo sandbox

?>