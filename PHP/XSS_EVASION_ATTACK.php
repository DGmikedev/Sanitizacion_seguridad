<?php

# MISSING_HSTS_HEADER

// En PHP:
header('Strict-Transport-Security: max-age=86400; includeSubDomains');

# descripción solución: Asignar el header HSTS
# Se recomienda que sea a travez del servidor y cuando no se cuenta  con conexión HTTPS se ignora este header

?>