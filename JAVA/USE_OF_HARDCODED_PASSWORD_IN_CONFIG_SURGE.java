

// USE_OF_HARDCODED_PASSWORD_IN_CONFIG_SURGE

// descripción solución:

// al poner una constraseña no encriptada en el aplication.properties Utilizar 
// algun cifrado valido para las contraseñas.	
// 
   Descargar jasypt en  http://www.jasypt.org/download.html 
// 
// Extraer la carpeta y colocarse en la carpeta bin ejecutar 
    encrypt.bat input="testers" 
    password="palabraclave"      // password es la palabra clave a utilizar para el cifrado.
    algorithm="PBEWITHHMACSHA384ANDAES_256" 
    ivGeneratorClassName="org.jasypt.iv.RandomIvGenerator"
    Donde: input es el password de la aplicación. 
//     
//     Esto nos dará la contraseña cifrada.  
// 
// 
     Dependencias y plugins en el POM:

     <dependency>
         <groupId>
             com.github.USER
         </groupId>
         <artifactId>
             jasypt-spring-boot-starter
         </artifactId>
             <version>
                 3.0.3
             </version>
     </dependency>
         <plugin>
             <groupId>
                 com.github.USER
             </groupId>
             <artifactId>
                 jasypt-maven-plugin
             </artifactId>
             <version>
                 3.0.3
             </version>
         </plugin>
//         
//         En el aplication.properties colocar lo siguiente: 
             jasypt.encryptor.iv-generator-classname= org.jasypt.iv.RandomIvGenerator 
             jasypt.encryptor.password=palabraclave (palabra clave utilizada anteriormente) 
//             
             jasypt.encryptor.algorithm=PBEWITHHMACSHA384ANDAES_256  
             spring.datasource.password=ENC(G3WX2ZTaD52FyrEEZs/srX3QmsNhTlgO2vHnxVVCBDh1jDLDXhlqut) (contraseña generada anteriormente)  
//         
//         en la clase CrudNuevaArquitecturaApplication.java, agregar la propiedad 
           @EnableEncryptableProperties	
//         
//         Para esto se creo una utileria en la siguiente ruta la cual se encarga de encriptar y desencriptar 
//         passwords mediante el algoritmo AESGCM => ruta donde se encuentra la  utilidad  
//         
//         Solo bastaria con copiar la clase PassDecryptor.java a nuestro proyecto y usar los metodos: 
//             encryptPass(cadena, clavesecreta y decryptPass(cadena, clavesecreta)
// 
// 
// 