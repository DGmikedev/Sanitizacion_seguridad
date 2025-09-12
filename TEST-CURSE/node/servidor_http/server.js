const { assert } = require('node:console');
const http = require('node:http');

const server = http.createServer((req, resp)=>{
    console.log(`respuetsa resicbida: [${resp}]`);
    resp.end("Bienvenido")
});


// simepre usar un puerto vacio
// port 0
server.listen(0, ()=>{
    console.log(`Server listening on port: http://localhost:${server.address().port}`);
});