<script>

// CLIENT_DOM_STORED_XSS

var arr = [data];  

$.each(arr, function(key, value){
		$("#mymodal").html(value);  
		    funcion_para_ajustar_div(dato_mandado);  
		$("#campo_escondido").hide();
	});

// solucion no queda clara encontrada en docuemntación
// descripción solución: Agregar el atributo sandbox  
  
/* -- EXAMPLE 2 --*/

var arr = [data];  
$.each(arr, function (key, value) {  
		switch (variable_a_evaluar) {  
		case 1:  html_div = "<option value = -1>Seleccione una Opción</option>";  
				for (var i = 0; i < variable_a_evaluar.reg.length; i++) 
				{  html_div += ("<option value =" + variable_a_evaluar.reg[i].id + ">" +
                            variable_a_evaluar.reg[i].desc.toUpperCase() + "</option>");  
			}  
		
		$('#campo_donde_se_ingresa_la_opcion').html(html_div);  
		break;  
		default:  alert(datos.descripcion);  break;  }  
	});

/*-- EXAMPLE 3 --*/

	var select_de_formulario = response.array_de_datos_deBDtos.map( array_de_datos_deBDtos => ( 
		{text: array_de_datos_deBDtos.descripcion, value: array_de_datos_deBDtos.id_array_de_datos_deBDtos}) ) 
		$.each(select_de_formulario, function() {  
		$("#select_de_formulario").append("<option></option>"); });  
		$("#select_de_formulario option").each(function(index) {  
			$(this).text(select_de_formulario[index].text);  
			$(this).attr("value",select_de_formulario[index].value); 
		});

// descripción solución: Se creo un metodo para poder crear <select> en el DOM dinamicos 
//                       sin inyectar variables inyectando en el DOM html limpio y luego recorriendo y 
//                       remplazando los .text y .attr de las options 

/*-- EXAMPLE 4 --*/

function funcion_de_consulta() {  
	$.ajax({  
		cache: false,  
		async: true,  
		url: endpoint,  
		dataType: "html",  
		success: function (data) {  
			var mi_data = data;  
			var arr = [mi_data];  
			$.each(arr, function(index, value) {  
				$("#car").empty();  
				$("#car").append(value);  
			});  
			div_buscar(dato_para_funcion);  
			$("#id_de_campo_a_llenar").val(dato_a_imprimir);  
		},  
		error: function (a, b, c) {  
			resultError(a, b, c)  }  
	}); 
}


// descripción solución: si se inyecta en el DOM un HTML se le puede añadir un paso extra donde metes el HTML 
//                       a un arreglo y la posicion 1 de ese arreglo funcionara como un contenedor de codigo 
//					    limpio que puedes inyectar en el DOM sin la vulnerabilidad


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


// descripción solución: Se remplaza la funcion para sacar parametros de la url por
//                       getparametros ya que esta lo obtendra de una forma mas segura, 
//                       sera necesario contemplar que ocupas remplacer el %20 por un espacio con 
//                       la funcion getparametros("dato__indice_para_busqueda").replace(/%20/g, " "); 
//                       (el ultimo replace del string)	


/*-- EXAMPLE 6 --*/

location.href = datos.urls_endpoints["enpoint_de_interes"];
					
// descripción solución: Se usa le relocalización de esta manera
					
					
/*-- EXAMPLE 7 --*/					


const $tabla = document.getElementById("archivo_donde_va_la_tabla");  
	$tabla.innerHTML = "";  for (i = 0; i <= (arrayLength - 1); i++) { 
		const $tr = document.createElement("tr");  
		const $td1 = document.createElement("td");  
		const $td2 = document.createElement("td");  
		const $td3 = document.createElement("td");  
		const $a1 = document.createElement("a");  
		const $a2 = document.createElement("a");   
		$td1.textContent = array[i][0];  
		$td2.textContent = array[i][1];   
		$a1.setAttribute('id', 'btn_de_descarga');
		$a1.setAttribute('href', 'javascript:;');  
		$a1.setAttribute('class', 'btn btn-sm btn-info input-sm');  
		$a1.setAttribute('data', array[i][0]);  
		$a1.textContent = 'Descargar';  
		$a1.style.marginRight = "10px";  
		$td3.append($a1);   
		$a2.setAttribute('id', 'btneliminar');  
		$a2.setAttribute('href', 'javascript:;');  
		$a2.setAttribute('class', 'btn btn-sm btn-danger input-sm');  
		$a2.setAttribute('data', array[i][0]);  
		$a2.textContent = 'Eliminar';  
		$td3.append($a2);    
		$tr.append($td1, $td2, $td3);  
		$table.append($tr);  }					

// descripcion de la solución: Se sustituye la forma de armar el html concatenando los valores a una nueva forma

</script>
