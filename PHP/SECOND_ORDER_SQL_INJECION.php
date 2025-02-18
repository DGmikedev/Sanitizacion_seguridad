<?php


$variable_sanitizada = filter_var($_SESSION['dato_de_sesion'], FILTER_SANITIZE_NUMBER_INT);

// explicaion de solución: Un dato puede ser vulnerado en el camino a su destino por tanto
//                         se debe sanitizar durante todo su translado al lugar de interes
//                         aquí se sanitiza un dato de sesión que esta siendo tratado.
//                                    
//                         $_SESSION['dato_de_sesion'] --> [RIESGO] ---->$variable_sanitizada
?>