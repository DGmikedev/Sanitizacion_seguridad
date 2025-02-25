
// INFORMATION_PORTABILITY_FLAW_IN_FILES_SEPARATOR


   ruta = File.separator + "sys" + File.separator + "prog" + File.separator + "log" + File.separator;	

// descripción solución:
// Surge al tener alguna ruta fija en donde se separan las carpetas con diagonales, 
// ya que si se monta el sistema en otro sistema operativo, este pudiera fallar por la manera de representar las rutas.
// Se tienen que cambiar las diagonales por un File.separator	



