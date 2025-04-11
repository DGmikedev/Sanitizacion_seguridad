#include <iostream>
#include <cstdlib>
#include <string>
#include <memory>

// Función para ejecutar el script de encrtool.py
// a su vez crea un pipe de comunicación para cachar el regreso
std::string cifrar(const char* comando){

	std::unique_ptr<FILE, decltype(&pclose)> pipe( popen(comando, "r"), pclose );
	if(!pipe){
		return "";
	}

	char buffer[128];        
	std::string resultado = ""; 
	// fgets obtiene el retorno por medio del pipe
	while (fgets(buffer, sizeof(buffer), pipe.get()) != nullptr ){
		resultado += buffer;
	}

	// Para eliminar el salto de línea si existe
	if (!resultado.empty() && resultado.back() == '\n' ){
		resultado.pop_back();
	}
	
	return resultado;
}

int main(){

	std::string line2encrypt = "lorem ipsum dolor eaestlorem ";
	std::string encryptool_path = "/encrptmodule/";
	std::string encryptool_name = "encrptool.py";
	std::string python_env = "python";

	std::string comando = python_env + " ." + encryptool_path + encryptool_name +" -s \"" + line2encrypt + "\" -p \"./encrptmodule/log.txt\"";
	std::cout << comando << std::endl;
	std::string str_cifrada =  cifrar(comando.c_str());

	if (!str_cifrada.empty()) {
        std::cout << "\nC++ RECUPERA CIFRADO DESDE PYTHON:\n " << str_cifrada + "\n"<< std::endl;
    } else {
        std::cerr << "Error al ejecutar el script de Python o no se recibió salida." << std::endl;
    }
	return 0;
}
