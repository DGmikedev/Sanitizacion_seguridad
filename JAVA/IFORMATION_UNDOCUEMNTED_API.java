
// IFORMATION_UNDOCUEMNTED_API

// Controller: 

@ExternalDocumentation     
@GetMapping(value = "confir/{user}")
    public ApiResponseDTO confirmarPrestamos( @PathVariable("user") Integer user){ 
            return new ApiResponseDTO(META, brmService.confirmarPrestamo(user));    
    }

// descripción solución:

// No documentar de manera correcta los métodos del controller.
// Utilizar la librería swagger en el pom y agregar la propiedad 
//     @ExternalDocumentation a cada metodo	

// POM: 
//     <dependency>
//         <groupId>
//             org.springdoc   
//         </groupId>
//         <artifactId>
//             springdoc-openapi-ui
//         </artifactId>
//         <version>
//             1.5.9
//         </version>
//     </dependency>


