<script>
	// CLIENT_DOM_STORED_CODE_INJECTION
	
	function funcion_a_sanitrizar() {  
		var array_de_datos = new Array();  
		$.ajax({  
			url: endpoint, 
			type: "POST", 
			async: false,
			dataType: "JSON",
			data: { 
					data_1: 1, 
					data_2: empl
				}  ,
			_success: function (data) {  
				array_de_datos = data;  
					console.log(array_de_datos);  
					dato_a_programa1 = array_de_datos.dato_de_BDtos_1;  
					dato_a_programa2 = array_de_datos.dato_de_BDtos_2;
					dato_a_programa3 = array_de_datos.dato_de_BDtos_3;  
					dato_a_programa4 = array_de_datos.dato_de_BDtos_4;   
			} ,
			get success() {  
				return this._success;  
			}, 
			set success(value) {  
				this._success = value;  
			},  
			error: function (a, b, c) { 
				ModalMensaje("error ajax " + a + " " + b + " " + c); }  
		});  
		return array_de_datos;
	
	
	// descripción solución: Se generan get y set
	
	
	
	
	
	

</script>