const http = require('http');
const server = http.createServer((request, response) => {
    
    response.writeHead(200, {'Content-Type': 'text/html' } );
    response.end('<h1>Ola, Mundo!</h1>');

});

server.listen(3000, () => console.log('Servidor: OK!\nPorta: https://localhost:3000\n '))