
// SPRING_MISSING_EXPECT_CT_HEADER

@Override     
protected void configure(HttpSecurity http) throws Exception {
    http.headers().addHeaderWriter(new StaticHeadersWriter("Expect-CT", "max-age=3600, enforce"));                      
}

// Agregar al POM: 

 <dependency>
     <groupId> 
          org.springframework.boot 
     </groupId>
     <artifactId> spring-boot-starter-security </artifactId>
 </dependency>
 <dependency>
     <groupId>
         org.springframework.security
     </groupId>
     <artifactId>
         spring-security-test
     </artifactId>
      <scope>
         test
     </scope>
 </dependency>


// descripción solución:
//      Al no tener spring security en la api  
//      Agregar las dependencias necesarias al POM y crear una clase que extienda de WebSecurityConfigurerAdapter	
 
