<?php

# CLIENT_DOM_STORED_XSS

var arrDatos = [data];  

$.each(arrDatos, function(key, value){
		$("#myModalPagina").html(value);  iniDivBuscarColonia(recibirDomicilio);  
		$("#lui_gridColonias").hide();
	});

# descripción solución: Agregar el atributo sandbox  
  
/* -- EXAMPLE 2 --*/

var arrDatos = [data];  
$.each(arrDatos, function (key, value) {  
		switch (datos.estatus) {  
		case 1:  sHtml = "<option value = -1>Seleccione una Opción</option>";  
				for (var i = 0; i < datos.registros.length; i++) 
				{  sHtml += ("<option value =" + datos.registros[i].idcatalogo + ">" + datos.registros[i].descripcion.toUpperCase() + "</option>");  
			}  
		
		$('#cboAsentamiento').html(sHtml);  
		break;  
		default:  alert(datos.descripcion);  break;  }  
	});

/*-- EXAMPLE 3 --*/

	var slcNacionalidad = respuesta.nacionalidad.map( nacionalidad => ( {text: nacionalidad.descripcion, value: nacionalidad.idnacionalidad}) ) 
		$.each(slcNacionalidad, function() {  $("#slcNacionalidad").append("<option></option>"); });  
		$("#slcNacionalidad option").each(function(index) {  
			$(this).text(slcNacionalidad[index].text);  
			$(this).attr("value",slcNacionalidad[index].value); 
		});

# descripción solución: Se creo un metodo para poder crear <select> en el DOM dinamicos 
#                       sin inyectar variables inyectando en el DOM html limpio y luego recorriendo y 
#                       remplazando los .text y .attr de las options 


/*-- EXAMPLE 4 --*/

function consuL_Col() {  
	$.ajax({  
		cache: false,  
		async: true,  
		url: urlColoniaHtml,  
		dataType: "html",  
		success: function (data) {  //var datos = eval( '(' + data + ')' );  
			var sHTML = data;  
			var arr = [sHTML];  
			$.each(arr, function(index, value) {  
				$("#car").empty();  
				$("#car").append(value);  
			});  
			div_buscar_col(rcibo_domic);  
			$("#idtxtCodPostal").val(codigopostal);  
		},  
		error: function (a, b, c) {  
			resultError(a, b, c)  }  
	}); 
}


# descripción solución: si se inyecta en el DOM un HTML se le puede añadir un paso extra donde metes el HTML 
#                       a un arreglo y la posicion 1 de ese arreglo funcionara como un contenedor de codigo 
#					    limpio que puedes inyectar en el DOM sin la vulnerabilidad


/*-- EXAMPLE 5 --*/

$(this).html("<p id='voidTag'></p>");  
$("#voidTag").text(mensaje);

# descripción solución: Se crea una etiqueta vacia en el html y se le da un .text	


function getparametros(name) {  
	var valorurl = get_url_valores()[name];  
	return valorurl === null ? "" : valorurl; 
}  

function get_url_valores(){
	var vars = {};  
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
		vars[key] = value;  
	});  return vars; 
}



# descripción solución: Se remplaza la funcion para sacar parametros de la url por
#                       getparametros ya que esta lo obtendra de una forma mas segura, 
#                       sera necesario contemplar que ocupas remplacer el %20 por un espacio con 
#                       la funcion getparametros("dato__indice_para_busqueda").replace(/%20/g, " "); 
#                       (el ultimo replace del string)	




						
?>