
// SPRING_MISSING_CONTENT_SECURITY_POLICY

// descripción solución:

Aparece al no tener spring security en la api Agregar las dependencias necesarias al POM 
y crear una clase que extienda de WebSecurityConfigurerAdapter	
    
    @Override     
    protected void configure(HttpSecurity http) throws Exception { 
        http.headers().addHeaderWriter( new StaticHeadersWriter("Expect-CT", "max-age=3600, enforce") );
        .contentSecurityPolicy( "script-src 'self' https://example.com; object-src https://example.com; report-uri /csp-report-endpoint/");     
    }
    
    