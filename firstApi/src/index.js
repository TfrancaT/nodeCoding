const http = require('http');
const users = require('./mocks/users');

const server = http.createServer((request, response) => {

    console.log(`Request Method: ${request.method} | Endpoint: ${request.url}`);

    if(request.url === '/users' && request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'application/json' } );
        response.end(JSON.stringify(users));
    } else {
        response.writeHead(404, {'Content-Type': 'text/html' } );
        response.end(` Cannot ${request.method} ${request.url} `);
    }
    
//    response.writeHead(200, {'Content-Type': 'text/html' } );
//    response.end('<h1>Ola, Mundo!</h1>');

});

server.listen(3000, () => console.log('Servidor: OK!\nPorta: https://localhost:3000\n '))